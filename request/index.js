let ajaxTimes = 0;
export const request=(params)=>{
    ajaxTimes++;
    //全局加载
    wx.showLoading({
      title: '加载中',
      mask: true,
    })

  /*resolve是成功时执行的函数  reject是失败的时候执行的函数*/
  const baseUrl = "";
  return new Promise((resolve,reject)=>{
      wx.request({
          ...params,
          url:baseUrl+params.url,
          success: (result)=>{
              resolve(result);
          },
          fail: (err)=>{
              reject(err);
          },
          complete: ()=>{
            ajaxTimes--;
            if(ajaxTimes===0) {
               wx.hideLoading({
                success: (res) => {},
              })
            }

          }
      });
  })
}
