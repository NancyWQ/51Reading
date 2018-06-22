Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexPopular: {total:254,pageNow:1,pageCount:9,content:[{ id: "1", title: "这九本书帮你掌控情绪，变得平静", img: "../../img/index/81.jpg", date: "01-10" }, { id: "2", title: "这九本书帮你掌控情绪，变得平静", img: "../../img/index/81.jpg", date: "01-10" }, { id: "3", title: "这九本书帮你掌控情绪，变得平静", img: "../../img/index/81.jpg", date: "01-10" }, { id: "4", title: "这九本书帮你掌控情绪，变得平静", img: "../../img/index/81.jpg", date: "01-10" }, { id: "5", title: "这九本书帮你掌控情绪，变得平静", img: "../../img/index/81.jpg", date: "01-10" }, { id: "6", title: "这九本书帮你掌控情绪，变得平静", img: "../../img/index/81.jpg", date: "01-10" }],}
  },
  nextPage:function(){
    // console.log(this.data.indexPopular.pageNow);
    if (this.data.indexPopular.pageNow < this.data.indexPopular.pageCount){
      // 发送请求，获取数据，最后设置成为新的内容
    } else if (this.data.indexPopular.pageNow=this.data.indexPopular.pageCount){
      console.log("这已经是最后一页了")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
