//app.js
App({
  onLaunch: function () {
    let that = this
    wx.getSystemInfo({
      success: res => {
        that.globalData.screenHeight = res.screenHeight;
        that.globalData.screenWidth = res.screenWidth;
        that.globalData.statusBarHeight = res.statusBarHeight
        that.globalData.navigationHeight = res.statusBarHeight + 44
        that.globalData.tabbarHeight = res.screenHeight - res.windowHeight
      }
    })
  },
  globalData: {
  }
})