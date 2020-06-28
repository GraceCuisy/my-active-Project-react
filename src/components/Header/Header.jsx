import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './css/header.styl'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='header-l'>
          <NavLink to="/">
            <i className="iconfont icon-ico-"></i>
          </NavLink>
        </div>
        <div className='header-m'>{this.props.title}</div>
        <div className='header-r'>
          <NavLink to='/search'>
            <i className='searchIcon'></i>
          </NavLink>
          <NavLink to="/cart">
            <i className='iconfont icon-gouwuche'></i>
          </NavLink>
        </div>
      </div>
    )
  }
}
