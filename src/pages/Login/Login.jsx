import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import LoginHeader from './LoginHeader/LoginHeader'
import './css/login.styl'

export default class Login extends Component {
  state={
    isLoginType:true, //页面显示登录类型页面
    isPhoneLogin:false, //页面显示手机号登录页面
    isEmailLogin:false, //页面显示邮箱登录页面
  }

  clickPhoneType=()=>{
    this.setState({
      isLoginType:false,
      isPhoneLogin:true
    })
  }

  clickEmailType=()=>{
    this.setState({
      isLoginType:false,
      isEmailLogin:true
    })
  }

  toLoginType=()=>{
    this.setState({
      isEmailLogin:false,
      isPhoneLogin:false,
      isLoginType:true
    })
  }

  render() {
    return (
      <div className='loginContainer'>
        {/* 头部 */}
        <Header className='header' title="网易严选"></Header>
        {/* 显示登录类型的结构 */}
        <div className='loginTypeWrap' style={{display:`${this.state.isLoginType?'block':'none'}`}}>
          <div className='upContainer'>
            <div className='logoWrap'>
              <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""/>
            </div>
            <div className='btnWrap'>
              <div className='btn phoneBtn' onClick={this.clickPhoneType}>
                <i className='icon phoneIcon'></i>
                <span className='btnText'>手机号快捷登录</span>
              </div>
              <div className='btn emailBtn' onClick={this.clickEmailType}>
                <i className='icon emailIcon'></i>
                <span className='btnText'>邮箱账号登录</span>
              </div>
            </div>
          </div>
          <div className='bottomContainer'>
            <div className='itemWrap'>
              <i className='icon weixinIcon'></i>
              <span className='btnText'>微信</span>
            </div>
            <div className='itemWrap'>
              <i className='icon qqIcon'></i>
              <span className='btnText'>QQ</span>
            </div>
            <div className='itemWrap'>
              <i className='icon weiboIcon'></i>
              <span className='btnText'>微博</span>
            </div>
          </div>
        </div>
        {/* 用于登录界面的结构 */}
        <div className='loginDetailWrap'>
          {/* 手机号登录界面 */}
          <div className='phoneLoginWrap' style={{display:`${this.state.isPhoneLogin?'block':'none'}`}}>
            <LoginHeader></LoginHeader>
            <div className='phoneForm'>
          
            </div>
            <div className='loginFooter' onClick={this.toLoginType}>
              <div className='btn'>
                <span>其他登录方式 {'>'}</span>
              </div>
            </div>
          </div>
          {/* 邮箱账号登录的页面 */}
          <div className='emailLoginWrap' style={{display:`${this.state.isEmailLogin?'block':'none'}`}}>
            <LoginHeader></LoginHeader>
            邮箱
            <div className='loginFooter' onClick={this.toLoginType}>
              <div className='btn'>
              <span>其他登录方式 {'>'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
