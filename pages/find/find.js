Page({

  /**
   * 页面的初始数据
   */
  data: {
    readyRead:true,
    willRead:true,
    book: { id: "1", title: "三国演义", doubanPoint: 9.4, img: "../../img/index/81.jpg", imgIcon:"../../img/icon/star.png", remarkNum: 7594, bookSeeing: ["◎《三国演义》是根据三国时期的史实和民间传说创作而成的优秀历史小说，它的内容丰富多彩，为读者留下了深厚而多彩的认识价值", "◎《三国演义》是根据三国时期的史实和民间传说创作而成的优秀历史小说，它的内容丰富多彩，为读者留下了深厚而多彩的认识价值", "◎《三国演义》是根据三国时期的史实和民间传说创作而成的优秀历史小说，它的内容丰富多彩，为读者留下了深厚而多彩的认识价值"], bookContent: ["《三国演义》是根据三国时期的史实和民间传说创作而成的优秀历史小说，它的内容丰富多彩，为读者留下了深厚而多彩的认识价值"], bookAuthor: ["《三国演义》是根据三国时期的史实和民间传说创作而成的优秀历史小说，它的内容丰富多彩，为读者留下了深厚而多彩的认识价值"]},
  userReadInfo:{userId:1,read:0,remarkGood:0,remarkOrdinary:0,want:0,noFeeling:0,noRemark:1164},
  },
  choose:function(){
    let _this=this;
    let aleadyRead=_this.data.readyRead;
    this.setData({readyRead:!aleadyRead});
    //往后台发送数据
  },
  choose1:function(){
    let _this = this;
    let willRead = _this.data.willRead;
    this.setData({willRead: !willRead});
    //往后台发送数据
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