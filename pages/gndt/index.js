// pages/gndt/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  },
  ng(url) {
    try {
      const value = wx.getStorageSync('skey')
      if (value) {
        wx.navigateTo({
          url: url,
        })
      }else{
        wx.showModal({
          cancelColor: '#000000',
          title: '提示',
          content: '使用该功能需要绑定教务系统，是否前去绑定？',
          showCancel: true,
          success: (res)=>{
            if(res.confirm) {
              wx.navigateTo({
                url: '/pages/login/index',
              })
            }
          }
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  },

  cj(){
    this.ng('/pages/cj/index');
  },
  kb (){
    this.ng('/pages/kb/index');
  },
  xl(){
    this.ng('/pages/xl/index');
  },
  kjs (){
    this.ng('/pages/kjs/index');
  },

  crlj(){
    wx.navigateTo({
      url: '/pages/crlj/index',
    })
  },
  xydh(){
    wx.navigateTo({
      url: '/pages/map/index',
    })
  }

})