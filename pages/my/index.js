// pages/index/index.js
Page({

  getUserProfile() { 
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        });
        wx.setStorageSync('userInfo', res.userInfo)
        try {
          const value = wx.getStorageSync('skey')
          if (!value) {
            wx.navigateTo({
              url: "/pages/login/index"
            })
          }
        }catch (e) {
        // Do something when catch error
      }
      } 
    })
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
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
    let userInfo = wx.getStorageSync('userInfo');
    this.setData({
      userInfo
    })
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