import React, { Component } from 'react'
import './css/cart.styl'

export default class Cart extends Component {
  state={
    userInfo:{}
  }
  componentDidMount(){
    // 从local中拿用户信息
    let userInfo=localStorage.getItem('user_info_key')
    if(userInfo){
      this.setState({userInfo:JSON.parse(userInfo)})
    }
  }
  handleLogin=()=>{
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className='cartContainer'>
        <div className='header'>
          <span className='leftText'>购物车</span>
          <span className='rightText'>领劵</span>
        </div>
        <div className='cartDesc'>
          <span>30天无忧退货</span>
          <span>48小时快速退款</span>
          <span>满99元免邮费</span>
        </div>
        <div className='contentWrap'>
          <div className='img'></div>
          {/* 显示登录按钮或者文字 "去添加点什么吧" */}
          <div className='loginBtn' onClick={this.handleLogin} style={{display:`${this.state.userInfo.nickname?'none':'block'}`}}>登录</div>
          <div className='cartText' style={{display:`${this.state.userInfo.nickname?'block':'none'}`}}>去添加点什么吧</div>
        </div>
      </div>
    )
  }
}
