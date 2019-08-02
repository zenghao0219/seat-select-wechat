Page({
  data: {
  },
  onLoad() {

  },
  onReady() {

  },
  CopyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {
   
  }
});