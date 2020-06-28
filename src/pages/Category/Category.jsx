import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {NavLink,Switch,Route} from 'react-router-dom'
import {reqCateNavDatas} from '../../api'
import CateDisplay from './CateDisplay/CateDisplay'
import './css/category.styl'

export default class Category extends Component {
  state={
    cateNavDatas:[],
    categoryId:0 //标识着点击了左侧哪个导航项
  }
  componentDidMount(){
    // 发请求获取左侧导航数据
    this.getCateNavDatas();
    //控制左侧nav区域
    this.bs=new BScroll('.leftContainer',{
      scrollY:true,
      click:true,
      
    })
  }
  // 点击搜索按钮,跳转到搜索页面
  toSearch=()=>{
    this.props.history.push('/search')
  }

  getCateNavDatas=async ()=>{
    const result=await reqCateNavDatas('/getcateNavDatas')
    if(result.code===200){
      this.setState({
        cateNavDatas:result.data.categoryL1List,
        categoryId:result.data.categoryL1List[0].id
      })
      // 自动跳转display id为11
      this.props.history.push(`/category/cateList/${this.state.categoryId}`)
    }
  }
  // 处理点击导航项的回调
  handleClick=(event,categoryId)=>{
    this.setState({categoryId})
    this.bs.scrollToElement(event.target,500)
  }

  render() {
    return (
      <div className="categoryWrap">
        <div className='header'>
          <div className='searchBtn' onClick={this.toSearch}>
            <i className='fang'></i>
            <span>搜索商品,共33356款好物</span>
          </div>
        </div>
        <div className='contentWrap'>
            {/* 左侧导航区 */}
            <div className='leftContainer'>
              <ul className='leftContent'>
                {
                  this.state.cateNavDatas.map((item,index)=>(
                    <li
                      className={`navItem ${item.id===this.state.categoryId ? 'active':null}`}
                      key={index}
                      onClick={(event)=>{this.handleClick(event,item.id)}}
                    >
                      <NavLink to={`/category/cateList/${item.id}`}>{item.name}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* 右侧的展示区 */}
            <div className='rightContainer'>
              {/* 二级路由展示区 */}
              <Switch>
                <Route path="/category/cateList/:categoryId" component={CateDisplay}/>
              </Switch>
            </div>
          </div>
      </div>
    )
  }
}
