//封装 请求相关的方法
import axios from "axios";
//导入nprogress 加载进度条模块
import 'nprogress/nprogress.css'
import NProgress from 'nprogress';

//初始化一个axios对象
var instance = axios.create({
    //请求的根路径
    baseURL: "http://127.0.0.1:8081",
    //超时时间
    timeout: 30000
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    alert("start");
    NProgress.start();
    return config;
}, function (error) {
    // 对请求错误做些什么
    alert("end1");
    NProgress.done();
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    alert("end2");
    NProgress.done();
    return response;
}, function (error) {
    // 对响应错误做点什么
    alert("end3");
    NProgress.done();
    return Promise.reject(error);
});


//创建get请求方法
let get = function (url, params) {
    let {data} = instance.get(url, {params});
    return data;
}

//创建一个post
let post = function (url, params) {
    let {data} = instance.post(url, params);
    return data;
}

//导出get和post方法
export {
    get,
    post
}
