import React from 'react'
import './index.less'
import { Link,withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig'
import logo from '../../assets/images/logo.png'

const { SubMenu,Item } = Menu;
 class LeftNav extends React.Component{
  /* 根据menu中数据的数组生成包含<Itme>||<SubMenu> */
  getMenuNodes=(menuList)=>{
    //得到当前请求的路径
    const path=this.props.location.pathname
    return menuList.map(item=>{
      if(!item.children){
        return(
          <Item key={item.key}>
            <Link to={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
            </Link>
          </Item>
    )
      }else{
        //如果请求的是当前的item 的children的某个item的path,当前的item 的key就是openkey
       const citem= item.children.find((citem,index)=>citem.key===path)
        if(citem){//当前请求的是某个二级菜单的路由
          this.openkey=item.key
          
        }
        return(
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            } 
          >
           {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
      
    })
  }
  componentWillMount=()=>{
    //得到要展开SubMenu的key
    this.getMenuNodes=this.getMenuNodes(menuList)
  }
  
    render(){
      //将请求的路由路径作为选中的key
      const selectedKeys=this.props.location.pathname
      //得到要展开SubMenu的key
      //  const getMenuNodes=this.getMenuNodes(menuList)
        return(
          <div className="left-nav">
            <Link to="/home" className="left-nav-header">
              <img src={logo} alt="logo"/> 
              <h1>后台管理</h1>
            </Link>
            <Menu
         
          mode="inline"
          theme="dark"
          selectedKeys={[selectedKeys]}
          defaultOpenKeys={[this.openkey]}
        >
          {this.getMenuNodes} 
          {/* <Item key="/home">
            <Link to="/home">
            <Icon type="home" />
            <span>首页</span>
            </Link>
          </Item>
          <SubMenu
            key="/products"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            } 
          >
            <Item key="/home">
            <Link to="/category">
            <Icon type="pie-home" />
            <span>分类管理</span>
            </Link>
          </Item>
          <Item key="/home">
            <Link to="/product">
            <Icon type="pie-home" />
            <span>商品管理</span>
            </Link>
          </Item>
    
          </SubMenu> */}
        </Menu>
           </div>
        )
    }
}
export default withRouter(LeftNav)