import React, { Component } from 'react'
import './css/personal.styl'

export default class Personal extends Component {
  state={
    userInfo:{},
  }
  componentDidMount(){
    let userInfo=localStorage.getItem('user_info_key')
    if(userInfo){
      this.setState({userInfo:JSON.parse(userInfo)})
    }
  }
  // 点击退出登录的回调
  cancelLogin=()=>{
    localStorage.removeItem('user_info_key')
    this.props.history.replace('/')
  }
  render() {
    return (
      <div id='personalWrap'>
        <div className='contentWrap' ref="contentWrap">
          <div className='personalHeader'>
            <div className='headerContent'>
              <div className='left'>
                <img className='avatar' src='https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png' alt=""/>
                <div className='info'>
                  <p>{this.state.userInfo.nickname?this.state.userInfo.nickname:'用户名'}</p>
                  <div className='userType'>
                    <span>普通用户</span>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='rightTop'>
                  <a href="">
                    <img className='right-t-l' src="https://yanxuan.nosdn.127.net/c7bf31bb125c2ff675d4daa8c1d7185e.png" alt=""/>
                  </a>
                  <a href="">
                    <i className='normalIcon'></i>
                  </a>
                </div>
                <div className='rightBottom'>
                  <i className='vIcon'></i>
                  <div className='word'>
                    <div className='lineOne'>Pro会员</div>
                    <div className='lineTwo'>立即试用</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='myAsset'>
            <h2 className='assetTit'>我的资产</h2>
            <div className='assetList'>
              <div className='assetItem'>
                <p>￥0</p>
                <p>回馈金</p>
              </div>
              <div className='assetItem'>
                <p>0</p>
                <p>红包</p>
              </div>
              <div className='assetItem'>
                <p>0</p>
                <p>优惠券</p>
              </div>
              <div className='assetItem'>
                <p>￥0</p>
                <p>津贴</p>
              </div>
              <div className='assetItem'>
                <p>0</p>
                <p>礼品卡</p>
              </div>
            </div>
          </div>
          <div className='menuContainer'>
            <div className='menuList'>
              <div className='menuItem'>
                <i className='iconfont icon-order'></i>
                <span>我的订单</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-icon'></i>
                <span>周六一起拼</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-BCxinbancion-'></i>
                <span>售后服务</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-fanli'></i>
                <span>邀请返利</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-youxiangou'></i>
                <span>优先购</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-jifenzhongxin'></i>
                <span>积分中心</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-ziyuan'></i>
                <span>会员俱乐部</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-dizhiguanli'></i>
                <span>地址管理</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-zhanghaoanquan'></i>
                <span>账号安全</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-ju-icon-customService'></i>
                <span>帮助与客服</span>
              </div>
              <div className='menuItem'>
                <i className='iconfont icon-yijian'></i>
                <span>意见反馈</span>
              </div>
            </div>
          </div>
          <h2 className='cancalLogin' onClick={this.cancelLogin}>退出登录</h2>
        </div>
      </div>
    )
  }
}
