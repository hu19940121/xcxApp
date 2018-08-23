
export function http (opt, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: opt.url,
      method: opt.method,
      data: params,
      success: function (res) {
        resolve(res)
      }
    })
  })
}
