import { request } from "../../request/index.js";

// pages/cj/index.js
Page({

  data: {
    CjList: [],
    year: 2021,
    term: 1,
    multiArray:[['2021-2022学年','2020-2021学年','2019-2020学年','2018-2019学年'],[1,2]],
    multiIndex: [0,0], //默认学年和学期
    yearArray: [[2021,2020,2019,2018],[1,2]]
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      postIndex: e.detail.value
    })
    this.getcj();
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
      yearArray: this.data.yearArray
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getcj();
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
    this.setData({
      CjList: []
    })
    this.getcj();
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

  getcj() {
    console.log(this.data.yearArray[0][this.data.multiIndex[0]]);
    console.log(this.data.yearArray[1][this.data.multiIndex[1]]); 
    request({ url: "https://www.joydada.top/wx/getcj", 
    data:{
      skey: wx.getStorageSync('skey'),
      year: this.data.yearArray[0][this.data.multiIndex[0]],
      term: this.data.yearArray[1][this.data.multiIndex[1]]
    }
  })
    .then(result =>{
      if(result.data.status == 200) {
        this.setData({
          CjList: result.data.data
        })
      }
    })
    // 手动关闭下拉刷新窗口
    wx.stopPullDownRefresh({
      success: (res) => {
      },
    })
  }
})