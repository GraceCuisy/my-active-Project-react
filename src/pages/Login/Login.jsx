import React, { Component } from 'react'
import {reqLogin} from '../../api'
import Header from '../../components/Header/Header'
import LoginHeader from './LoginHeader/LoginHeader'
import './css/login.styl'

export default class Login extends Component {
  state={
    isLoginType:true, //页面显示登录类型页面
    isPhoneLogin:false, //页面显示手机号登录页面
    isEmailLogin:false, //页面显示邮箱登录页面
    STATUS_USER:false, //用户名的状态
    STATUS_PASSWORD:false //密码的状态
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
  // 检测用户名的正确性
  checkUser=()=>{
    //函数体
    let value=this.refs.userName.value
    // 声明正则
    const reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    // 判断
    if(!reg.test(value)){ //手机号检验没有通过
      this.state.STATUS_USER=false
      this.refs.helpTip.innerHTML='手机号格式错误'
      this.refs.helpTip.style.display='block'
    } else{ //手机号检验通过验证
      this.state.STATUS_USER=true
      this.refs.helpTip.style.display='none'
    }
  }
  // 检测密码的正确性
  checkPsw=()=>{
    //函数体
    let value=this.refs.psd.value
    // 判断
    if(!value.trim()){ //密码为空
      this.state.STATUS_PASSWORD=false
      if(this.refs.helpTip.style.display==='none'){
        this.refs.helpTip.innerHTML='请输入密码'
        this.refs.helpTip.style.display='block'
      }
    } else{ //密码检验通过验证
      this.refs.helpTip.style.display='none'
      this.state.STATUS_PASSWORD=true
    }
  }

  handleLogin=async ()=>{
    if(this.state.STATUS_USER && this.state.STATUS_PASSWORD){
      // 用户名和密码都通过验证之后
      let mobile=this.refs.userName.value;
      let password=this.refs.psd.value;
      const result=await reqLogin(mobile,password)
      if(result.code===200){
        // 将用户的信息存到local中
        const userInfo=result.data;
        localStorage.setItem('user_info_key',JSON.stringify(userInfo))
        this.props.history.replace('/')
      }else{
        alert('登录失败')
      }
    }
    return false
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

            <div className='phoneFormWrap'>
              <form className='phoneForm'>
                <div className='form-section'>
                  <input 
                    className='userInput' 
                    type="text" 
                    name='username' 
                    placeholder='请输入手机号'
                    onBlur={this.checkUser}
                    ref='userName'
                  />
                </div>
                <div className='form-section'>
                  <input 
                    className='passowrdInput' 
                    type="text" 
                    name='password' 
                    placeholder='请输入密码'
                    onBlur={this.checkPsw}
                    ref='psd'
                  />
                </div>
                <span className='helpTip' ref='helpTip'></span>
                <div className='more'>
                  <span>忘记密码?</span>
                  <span>短信快捷登录</span>
                </div>
                <button type='button' onClick={this.handleLogin} className='loginBtn'>登录</button>
              </form>
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
