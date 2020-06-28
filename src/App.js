import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Index from './pages/Index/Index'
import Category from './pages/Category/Category'
import WorthBuy from './pages/WorthBuy/WorthBuy'
import Cart from './pages/Cart/Cart'
import Personal from './pages/Personal/Personal'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'

import './App.styl'

export default class App extends Component {
  render(){
    return (
      <div id='app'>
        <Switch>
          <Route path="/category" component={Category}/>
          <Route path="/worthBuy" component={WorthBuy}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/login" component={Login}/>
          <Route path="/search" component={Search}/>
          <Route path="/" component={Index}/>
          <Redirect to='/'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}