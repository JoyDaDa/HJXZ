import { request } from "../../request/index.js";

Page({
  data: {
    classroomList: [],
    zcd: [],
    xqj: '',
    jcd: [],

    zcCommentList: [{
      value: '1',
      selected: false ,
      title: '1'
    },{
      value: '2',
      selected: false ,
      title: '2'
    },{
      value: '3',
      selected: false ,
      title: '3'
    },{
      value: '4',
      selected: false ,
      title: '4'
    },{
      value: '5',
      selected: false ,
      title: '5'
    },{
      value: '6',
      selected: false ,
      title: '6'
    },{
      value: '7',
      selected: false ,
      title: '7'
    },{
      value: '8',
      selected: false ,
      title: '8'
    },{
      value: '9',
      selected: false ,
      title: '9'
    },{
      value: '10',
      selected: false ,
      title: '10'
    },{
      value: '11',
      selected: false ,
      title: '11'
    },{
      value: '12',
      selected: false ,
      title: '12'
    },{
      value: '13',
      selected: false ,
      title: '13'
    },{
      value: '14',
      selected: false ,
      title: '14'
    },{
      value: '15',
      selected: false ,
      title: '15'
    },{
      value: '16',
      selected: false ,
      title: '16'
    },{
      value: '17',
      selected: false ,
      title: '17'
    },{
      value: '18',
      selected: false ,
      title: '18'
    },{
      value: '19',
      selected: false ,
      title: '19'
    },{
      value: '20',
      selected: false ,
      title: '20'
    },{
      value: '21',
      selected: false ,
      title: '21'
    }
  
  
  ],
    xqCommentList: [{
      value: '1',
      selected: false ,
      title: '1'
    },{
      value: '2',
      selected: false ,
      title: '2'
    },{
      value: '3',
      selected: false ,
      title: '3'
    },{
      value: '4',
      selected: false ,
      title: '4'
    },{
      value: '5',
      selected: false ,
      title: '5'
    },{
      value: '6',
      selected: false ,
      title: '6'
    },{
      value: '7',
      selected: false ,
      title: '7'
    }],
    jcCommentList: [{
      value: '1',
      selected: false ,
      title: '1'
    },{
      value: '2',
      selected: false ,
      title: '2'
    },{
      value: '3',
      selected: false ,
      title: '3'
    },{
      value: '4',
      selected: false ,
      title: '4'
    },{
      value: '5',
      selected: false ,
      title: '5'
    },{
      value: '6',
      selected: false ,
      title: '6'
    },{
      value: '7',
      selected: false ,
      title: '7'
    },{
      value: '8',
      selected: false ,
      title: '8'
    },{
      value: '9',
      selected: false ,
      title: '9'
    },{
      value: '10',
      selected: false ,
      title: '10'
    },{
      value: '11',
      selected: false ,
      title: '11'
    }]
  },
  zccheckboxChange(e){
    // console.log('checkboxChange e:',e);
    let string = "zcCommentList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.zcCommentList[e.target.dataset.index].selected
        })
        let detailValue = this.data.zcCommentList.filter(it => it.selected).map(it => it.value)
        // detailValue += Math.pow(2,detailValue.map(it => it.value));
        this.setData({
          zcd: detailValue
        })
        console.log('周次所有选中的值为：', detailValue)
  },
  xqcheckboxChange(e){
    // console.log('checkboxChange e:',e);
    let string = "xqCommentList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.xqCommentList[e.target.dataset.index].selected
        })
        let detailValue = this.data.xqCommentList.filter(it => it.selected).map(it => it.value)
        let a = detailValue.toString();
        this.setData({
          xqj: a
        })
        console.log('星期所有选中的值为：', a)
  },

  jccheckboxChange(e){
    // console.log('checkboxChange e:',e);
    let string = "jcCommentList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.jcCommentList[e.target.dataset.index].selected
        })
        let detailValue = this.data.jcCommentList.filter(it => it.selected).map(it => it.value)
        this.setData({
          jcd: detailValue
        })
        console.log('节次所有选中的值为：', detailValue)
  },


  getKjs() {
    let zcd = 0;
    for(let j = 0; this.data.zcd[j]!=null; j++) {
      zcd += Math.pow(2,this.data.zcd[j]-1)
    }

    console.log(this.data.xqj);

    let jcd = 0;
    for(let j = 0; this.data.jcd[j]!=null; j++) {
      jcd += Math.pow(2,this.data.jcd[j]-1)
    }

    if(zcd == 0 || this.data.xqj == '' || jcd == 0 ){
      wx.showToast({
        title: '请检查选项',
        icon: 'error'
      })
    }else {
      request({ url:"https://www.joydada.top/wx/getkjs",
      data: {
        skey: wx.getStorageSync('skey'),
        xnm: 2021,
        xqm: 2,
        zcd: zcd,
        xqj: this.data.xqj,
        jcd: jcd,
      }          
    })
    .then(result=>{
      // console.log(result.data.data);
      this.setData({
          classroomList: result.data.data
        })
      })  
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getKjs();
  },

})