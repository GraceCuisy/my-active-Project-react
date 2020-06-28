import React, { Component } from 'react'
import './css/bigPromotion.styl'

export default class BigPromotion extends Component {
  render() {
    return (
      <div className='bigProWrap'>
        <div className='floorTop'>
          <div className='proItem'>
            <div className='promGood'>
              <img src="https://yanxuan-item.nosdn.127.net/731e33c792da850caf92799c48d4a669.png?imageView&thumbnail=168x0&quality=75" alt=""/>
            </div>
          </div>
        </div>
        <div className='floorFirst'>
          <div className='promItem'></div>
        </div>
      </div>
    )
  }
}
