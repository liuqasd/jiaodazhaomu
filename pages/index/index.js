// index.js
// 获取应用实例
Page({
  data:{
    thisCompetitionList:[
    {
      imagePath:"/images/fwwb.jpg",
      name:"中国大学生服务外包创新创业大赛"
    },
    {
      imagePath:"/images/jsjsj.jpg",
      name:"中国大学生计算机设计大赛"
    },
    {
      imagePath:"/images/acm.jpg",
      name:"ACM国际大学生程序设计竞赛"
    }
  ],
  currentIndex:0
  },

  onLoad: function (options) {
    this.setData({
      currentIndex: 0
    })
  },
  onShow: function () {

  },
  onReady: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
})
