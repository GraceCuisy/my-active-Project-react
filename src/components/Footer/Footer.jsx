import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './css/footer.styl'

export default class Footer extends Component {
  render() {
    return (
      <div className='tabbar'>
        <NavLink className='tabItem' exact to="/">
          <i className="iconfont icon-ico-"></i>
          <span>首页</span>
        </NavLink>
        <NavLink className='tabItem' to="/category">
          <i className="iconfont icon-leimupinleifenleileibie"></i>
          <span>分类</span>
        </NavLink>
        <NavLink className='tabItem' to="/worthBuy">
          <i className="iconfont icon-tupian"></i>
          <span>值得买</span>
        </NavLink>
        <NavLink className='tabItem' to="/cart">
          <i className="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </NavLink>
        <NavLink className='tabItem' to="/personal">
          <i className="iconfont icon-renwu"></i>
          <span>个人</span>
        </NavLink>
      </div>
    )
  }
}
