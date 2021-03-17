const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  bannerData: state => state.bannerData,
  newsData: state => state.newsData,
}
export default getters
