// 包含所有接口的请求函数
import ajax from './ajax'

// 获取首页的数据
export const reqIndexData=()=> ajax.get('/api/getIndexData')

// 获取首页nav模块对应的数据
export const reqIndexCateModule=()=>ajax.get('/api/getIndexCateModule')

// 获取分类页面的左侧导航数据
export const reqCateNavDatas=()=>ajax.get('/api/getcateNavDatas')

// 获取分类右侧内容数据
export const reqCateLists=()=>ajax.get('/api/getcateLists')

// 请求登录
export const reqLogin=(mobile,password)=>ajax.post('/api/login',{mobile, password})
// 请求退出登录的接口
export const reqLogout=()=>ajax.get('/api/logout')

// 获取值得买页面的nav(tab)数据
export const reqWorthBuyNav=()=>ajax.get('/net/topic/v1/know/navWap.json')

// 获取值得买瀑布流数据首屏数据
export const reqTopicFirstScreen=()=>ajax.get('/net/topic/v1/find/recManual.json')
// 获取值得买瀑布流触底加载数据
export const reqRecAuto=(page,size)=>ajax.get('/net/topic/v1/find/recAuto.json',{
  params:{
    page,
    size
  }
})
// 获取搜索界面初始化显示数据
export const reqSearchInitData=()=> ajax.post('/net/xhr/search/init.json')
// search界面的关键字搜索接口
export const reqKeywordSearch=(keywordPrefix)=>ajax.post('/net/xhr/search/searchAutoComplete.json',
{keywordPrefix})
