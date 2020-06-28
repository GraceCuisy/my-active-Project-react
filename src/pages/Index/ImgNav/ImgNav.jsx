import React, { Component } from 'react'
import {reqIndexData} from '../../../api'
import './css/imgNav.styl'

export default class ImgNav extends Component {
  state={
    indexData:{},
    kingKongList:[],
  }
  componentDidMount(){
    // 发请求拿首页的数据
    this.getIndexData()
  }
  
  getIndexData=async ()=>{
    const result=await reqIndexData();
    if(result.code===200){
      this.setState({indexData:result.data,kingKongList:result.data.kingKongModule.kingKongList})
    }
  }
  render() {
    return (
      <div className="ImgNavContainer">
        <div className='navList'>
          <div className='navItem'>
            <img src='https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png' alt=""/>
            <span>新品首发</span>
          </div>
          {
            this.state.kingKongList.map((item,index)=>(
              <div className='navItem' key={index}>
                <img src={item.picUrl} alt=""/>
                <span>{item.text}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
