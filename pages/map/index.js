// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subkey: 'C6PBZ-NDIL5-YH2IP-Q7RIC-4TRWH-AGBS3',
    enable3d: false,
    showLocation: true,
    showCompass: false, 
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolyon: false,
    enableSatellite: false,
    enableTraffic: false,
    longitude: '117.392742',
    latitude: '31.933577',
    markers: [
      {
        'id': 1,
        'callout': {
          'content': '图书馆',
          'display': 'ALWAYS',
          'fontSize': 14,
          'borderColor': '#f24e4e'
        },
        'longitude': '117.393188',
        'latitude': '31.933559',
        'iconPath': '',
        'width': 32,
        'height': 32
      },
      {
        'id': 2,
        'callout': {
          'content': '教学A区-入口',
          'display': 'ALWAYS',
          'fontSize': 14
        },
        'longitude': '117.392791',
        'latitude': '31.93264030262187',
        'iconPath': '',
        'width': 32,
        'height': 32
      }

    ],
    circles: [],
    polygons: [],
    polylines: []

  },

  handleMarkertap(e) {
    console.log(e);
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