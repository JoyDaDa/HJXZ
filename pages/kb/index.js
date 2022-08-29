// pages/kb/index.js
import { request } from "../../request/index.js";
import { getYearWeek } from "../../utils/week.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    KbList: {},
    xnm: 2021,
    xqm: 2,
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD","#E29AAD", "#90C652"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handlekb();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.handlekb();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //this.handlekb();
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
    this.refresh();
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

  handlekb() {
    const value = wx.getStorageSync('kblist');
    if(!value.data) {
      //不存在
      this.getkb();
    } else {
      // 有旧数据 定义过期时间 //60s*30=30min
       if(Date.now()-value.time < 1000){
         //this.getkb();
      }else{
        this.setData({
          KbList: wx.getStorageSync('kblist').data
        })
       }
    }      
  },

  getkb(){
    request({url:'https://www.joydada.top/wx/getkb',data:{ skey: wx.getStorageSync('skey'),xnm: this.data.xnm,xqm: this.data.xqm}})
    .then(result=>{
      console.log(result.data);
      let datas = result.data.data
      let kblist = []

      let startweek=getYearWeek(2022,2,19);//开学星期 计算偏差
      // let nowweek=getYearWeek(2022,3,7);
      // console.log(nowweek-startweek);

      for(let i = 0,len=datas.length; i < len; i++) {
        var vote = {};
        var tmpe=datas[i].dateDigitSeparator.match(/(\d+)-(\d+)-(\d+)/);
        let nowweek=getYearWeek(tmpe[1],tmpe[2],tmpe[3]);
        var n =  datas[i].zcd.match(/(\d+)-(\d+)/);
        // console.log(n[1],n[2]);
        if(n[1] <= nowweek-startweek+1 &&  nowweek-startweek+1 <= n[2]) {
          vote.xqj = datas[i].xqj;
          vote.skjc = datas[i].jcs.charAt(0);
          vote.skcd = '2';
          vote.kcmc = datas[i].kcmc;
          vote.cdmc = " "+datas[i].cdmc;
          kblist.push(vote);
        }
      }
      if(kblist[0])
      {
        wx.setStorageSync('kblist', {time:Date.now(),data:kblist});
      }
      this.setData({
        KbList: wx.getStorageSync('kblist').data
      })
    })
  },

  refresh(){
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    wx.showLoading({
      title: 'Loading...',
    })
    this.getkb();
    console.log("下拉刷新啦");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000)
  }




  
  
})

