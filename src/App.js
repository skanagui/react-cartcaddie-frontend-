

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Home from "./Components/Home.js";
import CartItem from "./Components/CartItem.js";
import Login from "./Components/Login.js";
import ItemContainer from "./Containers/ItemContainer";
import GolfCourses from "./Components/GolfCourse.js"; 
import Header from "./Components/Header.js";
import NavBar from "./Containers/NavBar.js";




export default class App extends Component {

  state = {
    golfCourses: [],
    items: [],
    user: [],
    cartItems: []
  }

  componentDidMount() {
    Promise.all([
    fetch("http://localhost:3000/api/v1/items"),
    fetch("http://localhost:3000/api/v1/cart_items"),
    fetch("http://localhost:3000/api/v1/golf_courses")])
    
    .then(([res1, res2, res3]) => {
       return Promise.all([res1.json(), res2.json(), res3.json()]) 
  })
   .then(([data1, data2, data3]) =>{
     this.setState({
       items:data1,
       cartItems:data2,
       golfCourses:data3



     })
   })
  }



  render() {
    
     console.log(this.state.items)
     console.log(this.state.cartItems)
     console.log(this.state.golfCourses)

    
    return (
      <Router>
       <div className="App">
          
          <Header/>
          <NavBar/>
          
          <Route  path="/" component={Home} />
          <Route  path="/cart_items" render={()=> <CartItem cartItems ={this.state.cartItems}/>}  />
          <Route  path="/login" component={Login} />
          <Route  path="/items" render={()=> <ItemContainer items={this.state.items}/>} />
          <Route  path="/golf_courses" render={()=> <GolfCourses golfCourses={this.state.golfCourses}/>} />  
          
        </div>
    </Router>
    )
  }
}
