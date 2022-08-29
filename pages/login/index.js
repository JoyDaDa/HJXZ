// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },

  userNameInput(e) {
    this.setData({
      username: e.detail.value
    })
  },

  passwordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },

  login(e) {
    if (this.data.username == 0 || this.data.password == 0) {
      wx.showToast({
        title: '值为空！',
        icon: "error"
      })
    }else {
      wx.login({
        success: (res) =>{
          wx.showLoading({
            title: '加载中',
          })
          if(res.code){
            wx.request({
              url: 'https://www.joydada.top/wx/login',
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: {
                code: res.code, //临时登录凭证
                username: this.data.username,
                password: this.data.password
                
                // rawData: res.rawData, //用户非敏感信息
                // signature: res.signature, //签名
                // encrypteData: res.encryptedData, //用户敏感信息
                // iv: res.iv //解密算法的向量
              },
              success: (res)=>{
                // wx.setStorageSync('username', this.data.username);
                // wx.setStorageSync('password', this.data.password);
                if (res.data.status == 200) {
                  // 小程序存储skey（自定义登录状态）到本地
                  wx.setStorageSync('skey', res.data.data);
                  wx.hideLoading();
                  wx.switchTab({
                    url: '/pages/index/index'
                  })
                } else if(res.data.status == 500) {
                  //教务系统宕机
                  wx.hideLoading();
                  wx.showToast({
                    title: '教务系统宕机,请稍后再试',
                  })
                } else if(res.data.status == 201){
                  //账号或密码错误
                  wx.hideLoading({});
                  wx.showToast({
                    title: '账号或密码错误',
                    icon: 'error'
                  })
                }
              },
              fail: (res)=>{
                wx.showToast({
                  icon: 'error',
                  title: '请稍后再试'
                })
              }

            })
          }
        }
      })
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