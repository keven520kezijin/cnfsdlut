import fetch from '@/utils/request'


/**
* 轮播图
* ===================================================================
*/
export function getBannerList(params) {
  const url = '/cnfs-platform/banner/getAll'
  return fetch.post(url, params || {}, 'json')
}

/**
* news
* ===================================================================
*/

// 列表
export function getNewsList(params) {
  const url = '/cnfs-platform/information/getAll'
  return fetch.post(url, params || {}, 'json')
}

// 详情
export function getNewsDetail(params) {
  const url = '/cnfs-platform/information/getInformationDetail'
  return fetch.get(url, params || {})
}
