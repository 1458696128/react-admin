import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { message } from 'antd'
import logo from '../../assets/images/logo.png'
import './login.less'
import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils';
import { Link } from "react-router-dom"
import {saveUser}from '../../utils/storageUtils'

class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                //验证成功了 发ajax请求
                const { Username, Password } = values
                const rusult = await reqLogin(Username, Password)
                

                if (rusult.code === 200) {
                    //保存用户的信息
                    const user = rusult.data
                    //保存在local文件,本质是字符串，调用JSON.stringify
                    saveUser(user)
                    memoryUtils.user = user//保存在内存中
                    
                   
                    //跳转到admin 界面
                    this.props.history.replace('/')
                } else {
                    message.error(rusult.msg)
                }
            }
        });

    }
    // myclick=()=>{
    //     console.log('点击了')
    //   this.props.history.replace('/')
    // }

    validatPwd = (rule, value, callback) => {
        value = value.trim()
        if (!value) {
            callback('请输入密码')
        } else if (value.length < 4) {
            callback('密码必须大于4位')
        } else if (value.length > 12) {
            callback('密码必须小于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文数字下划线组成！')
        } else {
            callback()
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo' />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('Username', {

                                    rules: [
                                        { required: true, whitespace: true, message: '请输入用户名！' },
                                        { min: 4, message: '用户名最小长度为4位' },
                                        { max: 12, message: '用户名最大长度为12位' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文数字下划线组成！' }

                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('Password', {
                                rules: [{
                                    validator: this.validatPwd
                                }]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>

                        <Form.Item>
                       
                            <Button type="primary" htmlType="submit" className="login-form-button"  >
                                
                              登录
                            </Button>
                            
                            
                                
                           
                             
                        </Form.Item>

                        <span className="register-from"> <Link to="/register">点我注册</Link></span>
                    </Form>
                    
                </section>
            </div >
        )
        
    }
}
const WrapperLogin = Form.create()(Login);
export default WrapperLogin




