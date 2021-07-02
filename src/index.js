import React  from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import memoryUtils from './utils/memoryUtils'
import './api'
import {getUser}from './utils/storageUtils'
//读取local中保存的user，缓存到内存中
const user=getUser()
memoryUtils.user=user
ReactDOM.render(<App/>,document.getElementById('root'))