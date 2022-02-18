Page({
  data:{
    thisPeopleList:[
    {
      imagePath:"/images/head.png"
    }
    ]
  },
  onLoad: function (options){
//    console.log(options.id)
    this.setData({
      mid: options.id
    })
    wx.request({
      url: 'url',
      method:"CONNECT",
      data:{

      },
      header:{

      },
      success: function(res){
        console.log(res)
          if(res.statusCode==200){
            that.setData({
              people:res.data
            })
          wx.setNavigationBarTitle({
            title: res.data.rating.average + 'title' + res.data.title,
          })
          wx.hideNavigationBarLoading({
            success: (res) => {},
          })
         }
      },
      fail: function(){

      },
      complete: function (){
        
      }
    })
    wx.showNavigationBarLoading({
      success: (res) => {},
    })
  },
  onShareAppMessage: function(){
    return{
      title:"招募详情" + this.data.people.title
    }
  }
})