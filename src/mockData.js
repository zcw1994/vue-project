// 引入 mockjs
import Mock from 'mockjs'

// 使用 Mock.mock() 来拦截请求
/*
  第一个参数 为 url 地址  要么写完整的请求 url 地址,包括要携带的所有参数即？后面夹带的东西，要么是写正在表达式来匹配
  第二个参数 是 自己定义的数据模板，即最终返回给 前端的内容
*/
Mock.mock('http://localhost:3000/banner/search?pageSize=10', {
  code: 0, // 'code|1': [0,-1]
  msg: 'ok',
  'data:|10-20': [
    {
      _id: 100,
      imgUrl: 'https://static.maizuo.com/v5/upload/44be11138912f3948fb1be135a528881.jpg?x-oss-process=image/quality,Q_70'
    },
    {
      _id: 101,
      imgUrl: 'https://static.maizuo.com/v5/upload/10f61eac0c1930fe30e1b5dbeaa56f71.jpg?x-oss-process=image/quality,Q_70'
    }
  ]
})
