// pages/index/index.js
import { request } from "../../request/index.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    SwiperList: [],
    CourseList: [],
    OneWord: [],
    weather: [],
    temperature: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getmySwiper();
    this.getCourseList();
    this.getWeather();
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
    this.getoneword();
    this.getCourseList();
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
    this.setData({
      SwiperList: [],
      CourseList: []
    }),
    this.getmySwiper();
    this.getCourseList();
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

  getmySwiper() {
    request({url:"https://www.joydada.top/wx/swiper"})
    .then(result=>{
      // console.log(result.data.data);
      this.setData({
        SwiperList: result.data.data
      })
      
    })
    // 手动关闭下拉刷新窗口
    wx.stopPullDownRefresh({
      success: (res) => {
      },
    })
  },

  getCourseList() {
    // let courseList = wx.getStorageSync('kblist').data;  
    let courseList = []
    var week = new Date().getDay(); 
    try {
      var kb = wx.getStorageSync('kblist').data;
      if (kb) {
        for(let i=0;i<kb.length;i++) {
          // console.log(kb[i]);
          if(kb[i].xqj == week){
            courseList.push(kb[i])
          } 
        }
        
        this.setData({
          CourseList: courseList
        })
      }
    } catch (e) {
      // Do something when catch error
    }

    // this.setData({
    //   CourseList: courseList
    // })
  },
  getoneword() {
    request({url:"https://open.iciba.com/dsapi/"})
    .then(result=>{
      this.setData({
        OneWord: result.data
      })
    })

  },

  getWeather(){
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/daily.json?',
      data: {
        key: 'SJf-OKzDJ5lrsm2rt',
        location: 'hefei'
      },
      success: (res)=>{
        this.setData({
          weather: res.data.results[0].daily
        })
      }
    }),
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json?',
      data: {
        key: 'SJf-OKzDJ5lrsm2rt',
        location: 'hefei'
      },
      success: (res)=>{
        this.setData({
          temperature: res.data.results[0].now
        })
      }
    })
  },

  gg() {
    try {
      const value = wx.getStorageSync('skey')
      if (!value) {
        wx.navigateTo({
          url: '/pages/login/index',
        })
      }else{
        wx.showModal({
          title: '你已登录，进入功能大厅可使用更多功能！',
          success: (res)=>{
            if(res.confirm){
              wx.switchTab({
                url: '/pages/gndt/index'
              })
            }else if(res.cancel) {

            }
          }
        })
      }
    } catch (e) {
  // Do something when catch error
    }
  }
  
})