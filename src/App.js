import React  from 'react'
import 'antd/dist/antd.less'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Login from './pages/login/login'
import  Admin  from './pages/admin/admin'
import  Register from './pages/register/register'


export default class App extends React.Component{
    render(){
        return(
           <BrowserRouter>
               <Switch>
                   <Route path='/login' component={Login}></Route>
                   <Route path="/register" component={Register}></Route>
                   <Route path='/' component={Admin}></Route>
                   
               </Switch>
           </BrowserRouter>
        ) 
    }
} 