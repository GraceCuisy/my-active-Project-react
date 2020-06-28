import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import {reqSearchInitData,reqKeywordSearch} from '../../api'
import './css/search.styl'

export default class Search extends Component {
  state={
    initSuggestList:[],
    keyword:'', //用户输入的关键字
    searchResultList:[],
  }

  componentDidMount(){
    // 获取suggestion的初始数据
    this.getInitData();
  }
  getInitData=async ()=>{
    const result=await reqSearchInitData()
      if(result.code==='200'){
        this.setState({initSuggestList:result.data.hotKeywordVOList})
      }
  }
  // 输入框输入的回调
  handleInput=()=>{
    let keyword=this.refs.inputNode.value.trim()
    this.setState({keyword})
    this.getKeywordSearch()
  }
  // 随着用户输入发送请求的函数 对发送请求的函数进行防抖处理
  getKeywordSearch=debounce(async function(){
    // 发送请求
    const result=await reqKeywordSearch(this.state.keyword);
    if(result.code==='200'){
      this.setState({searchResultList:result.data})
    }
  },500)
  // 清空用户输入
  clearKeyword=()=>{
    let inputNode=this.refs.inputNode
    inputNode.value=''
    this.setState({keyword:''})
  }
  // 取消搜索
  handleCancel=()=>{
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className='searchWrap'>
        <div className='header'>
          <div className='searchBtn'>
            <i className='fang'></i>
            <input 
              type="text" 
              ref='inputNode'
              placeholder="防疫特供物资,复工复学保驾护航"
              onInput={this.handleInput}
            />
            <i 
              className='clearBtn' 
              style={{display:`${this.state.keyword.length>0 ? 'block':'none'}`}}
              onClick={this.clearKeyword}
            ></i>
          </div>
          <span className='cancelBtn' onClick={this.handleCancel}>取消</span>
        </div>
        {/* 显示推荐搜索项或者显示搜索结果的列表 */}
        <div className='suggestView' style={{display:`${this.state.keyword.length===0?'block':'none'}`}}>
          <div className='suggestHeader'>
            热门搜索
          </div>
          <div className='list'>
            {
              this.state.initSuggestList.map((item,index)=>(
                <div 
                  key={index}
                  className={`item ${item.highlight===1? 'active':null}`}
                >
                  {item.keyword}
                </div>
              ))
            }
          </div>
        </div>
        <ul className='searchResultList'>
          {
            this.state.searchResultList.map((item,index)=>(
              <li className='resultItem' key={index}>
                <span>{item}</span>
                <span>{'>'}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
