let domain = 'http://192.168.1.105:8083'
// let domain = 'http://kaier2.free.idcfengye.com'

export const apis = {
  getChannelList: {
    url: domain + '/api/v2/channel/channelList',
    method: 'get'
  },
  xcxLogin: {
    url: domain + '/api/v2/xcxLogin/login',
    method: 'post'
  },
  getChannelContentById: {
    url: domain + '/api/v2/channel/getChannelContentById',
    method: 'get'
  }
}
