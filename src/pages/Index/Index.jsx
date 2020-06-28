import React, { Component } from 'react'
import {Switch,Route,NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import {reqIndexData,reqIndexCateModule} from '../../api'
import Carousel from '../../components/Carousel/Carousel'
import ImgNav from './ImgNav/ImgNav'
import BigPromotion from './BigPromotion/BigPromotion'
import FloorOne from './FloorOne/FloorOne'
import CommonNav from './CommonNav/CommonNav'
import './css/index.styl'

export default class Index extends Component {
  state={
    topSwiperList:[
      'https://yanxuan.nosdn.127.net/6b8ccb74fe966ecb9a7f375197590f10.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'http://yanxuan-miaobi.nos-jd.163yun.com/1127004_1_4_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/db1b51a817ef9e318e0268b8b17b3781.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/9fc95f708136dec4090a3709c2ea4956.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/d9cfb21a1b40f8cc73ec4fb4ba2a0a79.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/5cac1571af2a16f18ea94a2c8b895e60.png?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    ],
    isShowMask:'none', //是否展开小三角
    indexData:{},
    indexCateModule:[],
    navId:0, //即将要去的二级路由的id
    isRecommend:true,
    policyDescList:[],
  }
  componentDidMount(){
    // 发请求拿首页的数据
    this.getIndexData()
    //发请求获取首页nav模块对应的数据
    this.getIndexCateModule()
    // 导航滚动的区域
    this.bs=new BScroll('.scrollContainer',{
      scrollX:true,
      click:true,
    })
    // 控制内容的滚动
    this.bscroll=new BScroll('.contentScroll',{
      scrollY:true,
      click:true,
      bounce:false,
      mouseWheel:true,
    })
  }
  
  getIndexData=async ()=>{
    const result=await reqIndexData();
    if(result.code===200){
      this.setState({indexData:result.data,policyDescList:result.data.policyDescList})
    }
  }
  getIndexCateModule=async ()=>{
    const result=await reqIndexCateModule();
    if(result.code===200){
      this.setState({indexCateModule:result.data})
    }
  }

  toCurrent=()=>{
    // 从当前页跳转当前页
    this.props.history.push('/')
    this.setState({navId:0,isRecommend:true})
  }
  // 点击切换导航标签的回调
  changeNav=(event,navId)=>{
    this.setState({isRecommend:false,navId})
    // 跳转到二级路由
    this.props.history.push(`/commonNav/${navId}`)
    this.bs.scrollToElement(event.target,500)
  }
  changeShowMask=()=>{
    let {isShowMask}=this.state
    if(isShowMask==='none'){
      isShowMask='block';
    }else{
      isShowMask='none'
    }
    this.setState({isShowMask})
  }

  render() {
    return (
      <div className='indexContainer'>
        <div className='header'>
          <div className='logo'></div>
          <NavLink className='search' to='/search'>
            <i className="fang"></i>
            <span>搜索商品,共33504款好物</span>
          </NavLink>
          <div className='loginBtn'>
            <NavLink to='/login'>登录</NavLink>
          </div>
        </div>
        {/* 导航区 */}
        <div className="navWrap">
          <div className='scrollContainer'>
            <ul className='navList'>
              <li 
                className={`navItem ${this.state.navId===0? 'active':null}`}
                onClick={this.toCurrent}
              >推荐</li>
              {
                this.state.indexCateModule.map((navItem,index)=>
                <li 
                  className={`navItem ${this.state.navId===navItem.id ? 'active':null}`} 
                  key={navItem.id}
                  onClick={(event)=>{this.changeNav(event,navItem.id)}}
                >{navItem.name}</li>
                )
              }
            </ul>
          </div>
          <div className='toggleWrap'>
            <div className='liner'></div>
            <div className='toggle'>
              <div className='toggleIcon' onClick={this.changeShowMask}></div>
            </div>
          </div>
          {/*点击三角展开内容区 */}
          <div className='tabWrap' style={{display:this.state.isShowMask}}>
            <div className='allText'>全部频道</div>
            <div className='moreCate'>
              <div className='cateTag cateTag-active'>推荐</div>
              <div className='cateTag'>居家生活</div>
              <div className='cateTag'>服饰鞋包</div>
              <div className='cateTag'>美食酒水</div>
              <div className='cateTag'>个护清洁</div>
              <div className='cateTag'>母婴亲子</div>
              <div className='cateTag'>运动旅游</div>
              <div className='cateTag'>数码家电</div>
              <div className='cateTag'>严选全球</div>
            </div>
          </div>
          {/* 遮罩层 */}
          <div className='mask' style={{display:this.state.isShowMask}}></div>
        </div>
        <div className='contentScroll'>
          {/* 首页内容区 */}
          <div className='contentContainer' style={{display:`${this.state.isRecommend? 'block':'none'}`}}>
            {/* 轮播图  使用需传入carouselList */}
            <div className="swiper">
              <Carousel className="swiper" carouselList={this.state.topSwiperList} ></Carousel>
            </div> 
            {/*title区 */}
            <div className="titleContainer" >
              {
                this.state.policyDescList.map((item,index)=>(
                  <div className="titItem" key={index}>
                    <i className="titIcon" style={{backgroundImage:`url(${item.icon})`}}></i>
                    <span>{item.desc}</span>
                  </div>
                ))
              }
           </div>
            {/*中间呼应nav的图片导航区 */}
            <ImgNav indexData={this.state.indexData}></ImgNav>
            {/* 中间大促销区域 */}
            <BigPromotion></BigPromotion>
            {/*新人专享礼和类目热销榜 */}
            <FloorOne></FloorOne>
          </div>
          {/*二级路由展示区 */}
          <Switch>
            <Route path='/commonNav/:navId' component={CommonNav}/>
          </Switch>
        </div>
      </div>
    )
  }
}
