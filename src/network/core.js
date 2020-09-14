import Axios from "axios"
import {GET,POST,PATCH} from './config'
import store from '../store/index'
import { Loading } from 'element-ui';

const instance=Axios.create({
    baseURL:"http://www.hj0819.top:44369/api/",
    // timeout:3000,
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    transformRequest:[function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
})

// 添加请求拦截器
var loading = null;

instance.interceptors.request.use(function (con) {
    // 在发送请求之前做些什么
    // console.log("请求拦截")
    // loading = Loading.service({
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)'
    //   });
      
      if (store.state.token) {
        con.headers.token = store.state.token;
      }

      return con
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log("响应拦截")
    setTimeout(() => {
        // loading.close();
      }, 100);
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });



export function result(methods,url,params) {
    switch(methods){
        case GET:
            return get(url,params)
        case POST:
            return post(url,params)
        case PATCH:    
            return patch(url,params)
    }
}


// get请求
function get(url,params){
    return instance.get(url,params)
}
// post请求
function post(url,params){
    return instance.post(url,params)
}

function patch(url,params){
  return instance.patch(url,params)
}