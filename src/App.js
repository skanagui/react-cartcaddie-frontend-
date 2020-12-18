

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./Components/Home.js";
import CartItems from "./Containers/CartItems.js";
import Login from "./Components/Login.js";
import ItemContainer from "./Containers/ItemContainer";
import GolfCourseContainer from "./Containers/GolfCourseContainer"; 
import Header from "./Components/Header.js";
import NavBar from "./Containers/NavBar.js";
import UserProfileContainer from './Containers/UserProfileContainer'




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
    fetch("http://localhost:3000/api/v1/golf_courses"),
    fetch("http://localhost:3000/api/v1/users")])
    
    .then(([res1, res2, res3, res4]) => {
       return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]) 
  })
   .then(([data1, data2, data3, data4]) =>{
     this.setState({
       items:data1,
       cartItems:data2,
       golfCourses:data3,
       user:data4



     })
   })
  }

  addItemToCartClickHandler = (cartItemObj) =>{
    console.log("adding", cartItemObj )
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({

        item_id: cartItemObj.id, 
        cart_id: 1,
        quantity: 1,

      })
    })
    .then(resp=>resp.json())
    .then(cartItemObj=>
      this.setState(()=>({cartItems: [...this.state.cartItems, cartItemObj]})))

  }

  removeItemFromCart = (item) => {
    console.log("Removing From Cart", item.id)
    fetch(`http://localhost:3000/api/v1/cart_items/${item.id}`, {
      method: "DELETE"

    })
    .then(resp => resp.json())
    .then(()=> {
      let copyItemsArray = [...this.state.cartItems]
      let newList = copyItemsArray.filter(itemObj => itemObj.id !== item.id)
      this.setState({cartItems: newList})
    })
    .catch(console.log)
    
  }



  render() {
    
    //  console.log(this.state.items)
    //  console.log(this.state.cartItems)
   console.log(this.state.golfCourses)
    console.log(this.state.user)

    
    return (
      <Router>
       <div className="App">
          
          <Header/>
          <NavBar/>
          <Route  path="/login" component={Login} />
          <Route  path="/" component={Home} />
          <Route  path="/cart_items" render={()=> <CartItems cartItems ={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} />}  />
          <Route  path="/items" render={()=> <ItemContainer items={this.state.items} addItemToCartClickHandler={this.addItemToCartClickHandler}/>} />
          <Route  path="/golf_courses" render={()=> <GolfCourseContainer golfCourses={this.state.golfCourses}/>} />  
          <Route  path="/userprofile" render={() => <UserProfileContainer user={this.state.user}/>} />
        </div>
    </Router>
    )
  }
}
