import React, { Component } from 'react'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import './css/carousel.styl'

export default class Carousel extends Component {
  
  componentDidMount(){
    new Swiper(this.refs.swiper, {
      loop: true, // 循环模式
      autoplay:true, //自动轮播
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      // 分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
  render() {
    return (
      <div className="swiper-container" ref="swiper">
        <div className="swiper-wrapper">
          {
            this.props.carouselList.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <img src={item} alt=""/>
              </div>
            ))
          }
        </div>
        {/* 如果需要分页器 */}
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
