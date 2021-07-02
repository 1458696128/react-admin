import React from 'react'
import { withRouter } from 'react-router'
import { Modal} from 'antd';
import './index.less'
import {formateDate} from '../../utils/dateTime'
import menuList from '../../config/menuConfig'
import {reqWeather} from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import {removeUser} from '../../utils/storageUtils'
import LinkButton from '../link-button';
/* Admin头部界面 */
class Header extends React.Component {
  state={
    currentTime:formateDate(Date.now()),
    weather:"晴"
  }
  //每隔一秒更新时间显示

  showcurrentTime=()=>{
    this.interValId=setInterval(()=>{
       const currentTime=formateDate(Date.now())
       this.setState({currentTime})
    },1000)
  }
   //得到当前请求路径对应的title
   getTitle=()=>{
     const path=this.props.location.pathname
     let title=""
     menuList.forEach(item=>{
       if(item.key===path){
        title =item.title
       }else if(item.children){
        const cItem= item.children.find(item=>item.key===path)
        if(cItem){
          title=cItem.title
        }
       }
     })
     return title

   }
   getweather=async()=>{
     const weather= await reqWeather();
     this.setState({weather})

   }
   goout=()=>{
    Modal.confirm(
      {
        title: '确定要退出吗?',
        onOk:()=> {
          console.log('OK');
          //清除用户信息
          memoryUtils.user={}//内存中
          removeUser()//local中
         
          this.props.history.replace('/login')

        },
        onCancel() {
          console.log('Cancel');
        },
      }
    )
   }
  componentWillUnmount(){
    clearInterval(this.interValId)
  }
  componentDidMount(){
    this.showcurrentTime()
    this.getweather()
  }
  render() {
    const{currentTime,weather}=this.state
    const {user}=memoryUtils
    
    //得到当前登录的用户
    // const {user}=memoryUtils
    //得到当前请求路径对应的title
    const title=this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
           <span>欢迎,&nbsp; {user.nickname}</span>
           {/* <a href="#1" onClick={this.goout}>退出</a> */}
           <LinkButton onClick={this.goout}>退出</LinkButton>

        </div>
        <div className="header-bottom">
            <div className="header-bottom-left">{title}</div>
            <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.16pic.com%2F00%2F17%2F23%2F16pic_1723773_b.jpg&refer=http%3A%2F%2Fphoto.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627708831&t=bbf5304d74b914786537f4811334742c" alt="weather"/>
            <span>{weather}
            </span>
            </div>
        
      </div>
      </div>
    )
  }
}
export default withRouter(Header)