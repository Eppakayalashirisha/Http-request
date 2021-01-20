import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/Home';
import Details from './components/Details';
import Creates from "./components/Create";
import Edit from './components/Edit';
import Nav from './components/Nav'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="container">
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/posts/:id" exact component={Details}/>
        <Route path="/posts/add" exact component={Creates}/>
        <Route path="/update/:id"   exact component={Edit}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App