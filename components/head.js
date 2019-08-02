Component({
  /**
   * 组件的属性列表
   */
  lifetimes: {
    attached: function() {

    }
  },
  properties: {
    needBack: { // 属性名
      type: Boolean,
      value: true
    },
    needHeight: { // 属性名
      type: Boolean,
      value: true
    },
    title: { // 属性名
      type: String,
      value: "页面"
    },
    background: { // 属性名
      type: String,
      value: "linear-gradient(to right, #C26DFE, #6F50F5)"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: getApp().globalData.statusBarHeight,
    titleColor: "white",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back(){
      // this.triggerEvent('temp', {
      //   temp: temp
      // })
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }
  }
})