// import axios from "axios";
// export default function ajax(url,data={},method="GET"){
//     return  new Promise((resolve,reject)=>{
//         let promise
//         if (method==='GET'){
//             promise =axios.get(url,{
//                 params:data//指定qurey参数
//             })
//         }else{
//             promise=axios.post(url,data)
//         }
//         promise.then(
//             //如果成功了 调用resolve()，并指定成功的数据
//             response=>{
//                 resolve(response.data)
//             },
//             error=>{
//                 alert('请求出错---'+error.message)
//             }
//         )

//     })
// }
//该模块封装ajax请求，

import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, method = 'GET') {

  return new Promise(function (resolve, reject) {
    let promise
    // 执行异步ajax请求
    if (method === 'GET') {
      promise = axios.get(url, { params: data }) // params配置指定的是query参数
    } else {
      console.log(data)
      promise = axios.post(url, data)
    }
    promise.then(response => {

      if (response.data.code === 200) {
        // 如果成功了, 调用resolve(response.data)
        resolve(response.data)
      }else{
        message.error('请求错误: ' + response.data.message)
      }


    }).catch(error => {  // 对所有ajax请求出错做统一处理, 外层就不用再处理错误了
      // 如果失败了, 提示请求后台出错
      message.error('请求错误: ' + error.message)
    })
  })
}

// async function login(){
//     const result=await ajax('/login',{
//         username:'admin',
//         password:'admin'
//     },'POST')
// if(result.status===0){

// }else{

// }
// }
