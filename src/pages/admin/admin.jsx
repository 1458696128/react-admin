import React from 'react'
import { Layout } from 'antd';
// import memoryUtils from '../../utils/memoryUtils'
import {Redirect,Switch,Route} from 'react-router-dom'
import AdminHeader from '../../compontents/header'
import LeftNav from '../../compontents/left_nav';
import Home from '../home/home'
import Caterory from '../category/category';
import Product from '../product/product';
import User from '../user/user';
import Rule from '../role/role';
import Bar from '../charts/bar';
import Pie from '../charts/pie';
import Line from '../charts/line';

const { Footer, Sider, Content } = Layout;
export default class Admin extends React.Component{
    render(){
        // const user=memoryUtils.user
        // if(!user._id){
        //     // this.props.history.replace('/login')
        //     return <Redirect to='/login'/>
        // }
        return(
            <Layout style={{height:'100%'}}>
            <Sider>
                <LeftNav/>
            </Sider>
            <Layout>
              <AdminHeader/>
              <Content style={{backgroundColor:'white',margin:'30px'}}>
                <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Caterory}/>
                <Route path='/product' component={Product}/>
                <Route path='/user' component={User}/>
                <Route path='/rule' component={Rule}/>
                <Route path='/charts/bar' component={Bar}/>
                <Route path='/charts/line' component={Line}/>
                <Route path='/charts/pie' component={Pie}/>
                <Redirect to ='home'/>
                </Switch>
               
              </Content>
              <Footer style={{textAlign:'center',color:'#aaa'}}>推荐使用chrome浏览器，可以获得更加的页面操作</Footer>
            </Layout>
          </Layout>
        )
    }
}