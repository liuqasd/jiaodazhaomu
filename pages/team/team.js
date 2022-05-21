Page({
  data:{
    thisTeamList:[
    {
      imagePath:"/images/head.png",
      name:"竞赛名",
      introduction:"队伍简介",
      aspiration:"意愿",
      contact:"联系方式",
      isAlreadyHave:true,
      id:0
    },
    {
      imagePath:"/images/head.png",
      name:"小比赛",
      introduction:"已有划水一人",
      aspiration:"找大腿",
      contact:"520",
      isAlreadyHave:true,
      id:1
    },
    {
      imagePath:"/images/head.png",
      name:"微比赛",
      introduction:"已有划水两人",
      aspiration:"划水第三人",
      contact:"521",
      isAlreadyHave:true,
      id:2
    }
  ]
  },
  f0:function(event){
    var teamId = event.currentTarget.dataset.teamId
    wx.navigateTo({
      url:"/pages/detail/detail?id" + teamId
    })
  },
  onShareAppMessage: function(){
    return{
      title:"寻找队伍"
    }
  }
})