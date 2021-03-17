import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import getQueryParam from './getQueryParam'
import store from '@/store'
import { getToken } from '@/utils/auth'

switch (process.env.NODE_ENV) {
  case 'development':
    window.__baseUrl = '//47.104.20.233:8089/'
    break
  case 'ut':
    window.__baseUrl = ''
    break
  case 'production':
    // window.__baseUrl = '//60.208.75.10:30075'
    window.__baseUrl = '//47.104.20.233:8089'
    break
  default:
    window.__baseUrl = ''
}

axios.defaults.baseURL = window.__baseUrl

// 创建实例
const instance = axios.create();
// axios内置的中断ajax的方法
const cancelToken = axios.CancelToken;
// 请求队列
let queue = [];
// 拼接请求的url和方法，同样的url+方法可以视为相同的请求
const currentReq = (config) =>{
  return `${config.url}_${config.method}`
}

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 添加cancelToken
    // eslint-disable-next-line new-cap
    config.cancelToken = new cancelToken(c => {
      queue.push({ req: currentReq(config), cancel: c });
    });

    // 添加token
    const token = store.getters.token || getQueryParam('token') || localStorage.getItem("token");
    if (token) {
      config.withCredentials = false;
      config.headers.Authorization = 'X-CAT ' + token;
    }
    // 添加语言
    // let lang = getQueryParam('lang') || localStorage.getItem('lang') || navigator.language || 'zh-CN';
    // if (lang === 'zh-HK') {
    //   lang = 'zh-TW';
    // }
    // config.headers.locale = lang.replace('-', '_');

    // 请求参数序列化
    if (config.method === "post" || config.method === "put" || config.method === "delete") {
      config.data = qs.stringify(config.data)
    }
 
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
        return Promise.resolve(response);
    }

    return Promise.reject(response);
  },
  error => {
    const status = error.response.status

    // if the custom code is not 20000, it is judged as an error.
    if (status !== 200 ) {
      Message({
        message: error.response.data.message,
        type: 'warning'
      })
    }

    return Promise.reject(error.response);
  },
)

/**
* 封装axios单个请求
* @param method
* @param url
* @param params
* @param contentType (post请求时，支持json格式传参)
*/
function sendRequest(method, url, params, contentType) {
  return instance({
    method,
    url,
    params: method === 'get' || method === 'delete' ? params : null,
    data: method === 'post' || method === 'put' ? params : null,

    transformRequest: [(data, headers) => {
      if (contentType === 'json') {
        headers['Content-Type'] = 'application/json';
        return JSON.stringify(params);
      } 
      return data;
    }],
    timeout: 5000
  })
  .then(res => {
    return Promise.resolve(res.data);
  })
  .catch(err => {
    console.log(err)
  })
}

/**
* 封装添加axios多个请求
* @param promiseArray
* @returns {Promise}
*/
function allAxios (promiseArray) {
  return new Promise((resolve, reject) => {
    axios.all(promiseArray)
      .then(allResponse => {
        resolve(allResponse)
      })

      .catch((error) => {
        reject(error)
      })
  })
}


export default {
  get: (url, params) => sendRequest('get', url, params),
  post: (url, params, contentType) => sendRequest('post', url, params, contentType),
  put: (url, params) => sendRequest('put', url, params),
  delete: (url, params) => sendRequest('delete', url, params),
  all: (promiseArr) => allAxios(promiseArr),
};

