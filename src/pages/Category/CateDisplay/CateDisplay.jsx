import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {reqCateLists} from '../../../api'
import './css/cateDisplay.styl'

class CateDisplay extends Component {
  state={
    cateLists:[], //总的数据
    cateObj:{}, //当页的数据对象
    categoryList:[],
    categoryId:''
  }
  componentDidMount(){
    console.log(this.props.match.params.categoryId);
    this.setState({categoryId:this.props.match.params.categoryId})
    // 发送请求获取右侧展示区数据
    this.getCateLists();
    //控制右侧展示区域
    this.rightBs=new BScroll('.CateDisplayWrap',{
      scrollY:true,
      click:true,
    })
  }

  getCateLists=async ()=>{
    let res=await reqCateLists('/getcateLists')
    let cateObj=res.data.find(item=>item.id===this.state.categoryId*1)
    let categoryList=cateObj.categoryList
    this.setState({
      cateLists:res.data,
      cateObj,
      categoryList,
    })
  }

  render() {
    return (
      <div className='CateDisplayWrap'>
        <div className="contentArea">
            {/* 顶部图片 */}
          <div className='topImg'>
            <img src="https://yanxuan.nosdn.127.net/54205f6db78e32eb9c5d1175b7164b01.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt=""/>
          </div>
          {/* 对于618专区 爆款专区 新品专区的 */}
          <div className='cateListFirst' >
            {
              this.state.categoryList.map((item,index)=>(
                <div className='cateItem' key={index}>
                  <img src={item.bannerUrl} alt=""/>
                  <span>{item.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default (props)=><CateDisplay {...props} key={props.location.pathname}/>