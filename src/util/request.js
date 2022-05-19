import axios from 'axios'

const request = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: 'http://127.0.0.1:8080',
    timeout: 60000, //请求超时，50000毫秒
})

request.interceptors.request.use(config => {
    //请求拦截
    return config;
},error => {
    //出现异常
    return Promise.reject(error)
})

request.interceptors.response.use(response => {
    return response;
},error => {
    return Promise.reject(error)
})

export default request;