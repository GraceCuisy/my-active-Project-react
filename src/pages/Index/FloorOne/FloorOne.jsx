import React, { Component } from 'react'
import './css/floorOne.styl'

export default class FloorOne extends Component {
  render() {
    return (
      <div className='floorOne'>
        <div className="freshmanModule">
          <div className='moduleTitle'>
            <span>-- 新人专享礼 --</span>
          </div>
          <div className='content'>
            <div className='left'>
              <div className='name'>新人专享礼包</div>
              <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt=""/>
            </div>
            <div className='right'>
              <div className='module'>
                <div className='activityItem'>
                  <div className='cnt'>
                    <div className='title'>福利社</div>
                    <div className='subTitle'>今日特价</div>
                  </div>
                  <div className='picWrap'>
                    <img src="https://yanxuan-item.nosdn.127.net/5b225f722180498c6f428eaeeeb45d3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""/>
                  </div>
                </div>
              </div>
              <div className='module'>
                <div className='activityItem'>
                  <div className='cnt'>
                    <div className='title'>福利社</div>
                    <div className='subTitle'>今日特价</div>
                  </div>
                  <div className='picWrap'>
                    <img src="https://yanxuan-item.nosdn.127.net/5b225f722180498c6f428eaeeeb45d3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
