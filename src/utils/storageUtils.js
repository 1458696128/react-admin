/* 该模块用于储存localstorage的数据  也可以引入store库处理字符串数据*/
export function saveUser(user){
    localStorage.setItem('USER_KTY',JSON.stringify(user))
}
export function getUser(){
   return JSON.parse(localStorage.getItem('USER_KTY')|| '{}')
}
export function removeUser(){
    localStorage.removeItem('user')
}