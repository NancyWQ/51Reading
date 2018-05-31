Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    info:"测试"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    if (this.data.id != null) {
      this.data.id == 0 && this.setData({info: "我想读的书"})
      this.data.id == 1 && this.setData({ info: "我觉得好看的书" })
      this.data.id == 2 && this.setData({ info: "我的反馈建议" })
      this.data.id == 3 && this.setData({ info: "关于51读书" })
    }
    wx.setNavigationBarTitle({
      title: this.data.info//页面标题为路由参数
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})