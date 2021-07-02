//该模块用于ajax发送请求
import jsonp from "jsonp";
import { message } from "antd";
import ajax from "./ajax";
// const BASE = 'http://localhost:3000'

const URL='http://q1.shaohu.host:8111/user/login'
// 登陆
export const reqLogin = (username, password) => ajax( URL, { username, password }, 'POST')

// reqLogin('admin','admin').then(result=>{
//     console.log('result',result)
// })
// const url = "http://www.weather.com.cn/data/cityinfo/101010100.html"
export const reqWeather = () => {
    const url = "http://www.weather.com.cn/data/cityinfo/101010100.html"
    
        return new Promise((resolve, reject) => {
            jsonp(url, {}, (err, data) => {
                if (!err) {
                    const weather = data.weatherinfo.weather
                    resolve(weather)
                } else {
                    message.error('获取数据失败')
                }
            })
        })
}



