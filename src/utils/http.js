import axios from 'axios'

// create 相当于 new 一个 axios的实例对象
const http = axios.create();

// 配置 http 的一些配置
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://129.28.111.139:3000' : 'http://localhost:3000';

// 默认 发起请求后等待响应时间
http.defaults.timeout = 10000; // 毫秒数

export default http;
