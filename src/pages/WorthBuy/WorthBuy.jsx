import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import {reqWorthBuyNav} from '../../api'
import './css/worthbuy.styl'

export default class WorthBuy extends Component {
  state={
    navList:[],//头部nav的数据
    topicList:[],//瀑布流的数据
    page:1,
    size:5,
  }

  componentDidMount(){
    this.getNavList()
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: '.pagination',
        type:'custom',
        renderCustom: function (swiper, current, total) {
          var _html = '';
          for (var i = 1; i <=total; i++) {
            if (current == i) {
              _html += '<li class="customLi active"></li>';
            }else{
              _html += '<li class="customLi"></li>';
            }
          }
          return _html;//返回所有的页码html
        }
      },
    });
  }
  // 获取导航轮播图数据
  getNavList=async ()=>{
    const result=await reqWorthBuyNav()
    this.setState({navList:result.data.navList})
  }

  render() {
    return (
      <div className='worthBuyWrap'>
        {/* 头部 */}
        <Header className='header' title='值得买'></Header>

        <div className='contentWrap' ref="contentWrap">
          <div className='contentContainer'>
              {/* 中间横向标签滑屏区 */}
            <div className='swiperTabWrap'>
              <div className='swiperTab-tit'>
                <img className='upPic' src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt=""/>
                <div className='upText'>严选好物 用心生活</div>
                <img className="upBg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt=""/>
              </div>
              <div className='swiperTab'>
                {/* 轮播图结构 */}
                <div className="swiper-container" ref="swiper">
                  <div className="swiper-wrapper">
                    {
                      this.state.navList.slice(0,this.state.navList.length/2).map((item,index)=>(
                        <div className="swiper-slide" key={index}>
                          <div className='tabItem'>
                            <img src={item.picUrl}  alt=""/>
                            <div className='tabName'>{item.mainTitle}</div>
                            <div className='tabDec'>{item.viceTitle}</div>
                          </div>
                          <div className='tabItem'>
                            <img src={this.state.navList[index+8].picUrl} alt=""/>
                            <div className='tabName'>{this.state.navList[index+8].mainTitle}</div>
                            <div className='tabDec'>{this.state.navList[index+8].viceTitle}</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  {/* 自定义分页器的容器 */}
                  <ul className="pagination"></ul>
                </div>
              </div>
            </div>
            {/* 下面瀑布流展示商品列表区域 */}
            <div className="container-water-fall">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
