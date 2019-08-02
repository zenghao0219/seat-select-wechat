//app.js
App({
  onLaunch: function () {
    let that = this
    wx.getSystemInfo({
      success: res => {
        that.globalData.screenHeight = res.screenHeight;
        that.globalData.screenWidth = res.screenWidth;
        that.globalData.statusBarHeight = res.statusBarHeight
      }
    })
  },
  globalData: {
  }
})