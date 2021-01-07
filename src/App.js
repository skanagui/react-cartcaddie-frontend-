
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, withRouter
} from 'react-router-dom';
import Home from "./Components/Home.js";
import Cart from "./Containers/Cart.js";
import Login from "./Components/Login.js";
import ItemContainer from "./Containers/ItemContainer";
import GolfCourseContainer from "./Containers/GolfCourseContainer"; 
import Header from "./Components/Header.js";
import NavBar from "./Containers/NavBar.js";
import UserProfileContainer from './Containers/UserProfileContainer';
import ReviewsContainer from './Containers/ReviewsContainer';
import LogOut from './Components/LogOut';
import './App.css';
import Vanny from './Components/Vanny';
import "semantic-ui-css/semantic.min.css";




class App extends Component {

  state = {
    golfCourses: [],
    items: [],
    user: [],
    cartItems: [],
    current_cart: [],
    reviews: [],
    newReview: {
      title: '',
      body: '',
      date: '',
    }
  }

  componentDidMount() {
    Promise.all([
    fetch("http://localhost:3000/api/v1/items"),
    fetch("http://localhost:3000/api/v1/cart_items"),
    fetch("http://localhost:3000/api/v1/golf_courses"),
    fetch("http://localhost:3000/api/v1/users"),
    fetch("http://localhost:3000/api/v1/reviews"),
    fetch("http://localhost:3000/api/v1/users")])
    
    .then(([res1, res2, res3, res4, res5, res6]) => {
       return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json()]) 
  })
   .then(([data1, data2, data3, data4, data5, data6]) =>{

    let current_cart = data6[0].carts.filter(cart=>cart.check_out === false)
    console.log(current_cart[0])
    let cartItems = data2.filter(element=>element.cart.id === current_cart[0].id)
    console.log("Current Cart", current_cart)
    console.log("This is the console", data2)
     this.setState({
       items:data1,
       cartItems:cartItems,
       golfCourses:data3,
       user:data4,
       reviews:data5,
       current_cart: current_cart[0]
     })
   })
  }

  

  addItemToCartClickHandler = (cartItemObj) =>{
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        
        item_id: cartItemObj.id, 
        cart_id: this.state.current_cart.id,
        quantity: 1,
        
      })
    })
    .then(resp=>resp.json())
    .then(cartItemObj=>{

      console.log("adding", cartItemObj )
      this.setState(()=>({cartItems: [...this.state.cartItems, cartItemObj]}))
    })

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

  reviewChangeHandler = (e) => {
    this.setState({
      newReview: {
        ...this.state.newReview, [e.target.name]: e.target.value,
      }
    })
  }

  editSubmitHandler = (reviewObj) => {

    fetch(`http://localhost:3000/api/v1/reviews/${reviewObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ 
        title: reviewObj.title,
        date: reviewObj.date,
        body: reviewObj.body 
       })
    })
    .then(resp => resp.json())
    .then(newReview => {
      let copiedArray = [...this.state.reviews]
      let idx = copiedArray.findIndex(review => review.id === newReview.id)
      copiedArray[idx] = newReview;
      this.setState({ reviews: copiedArray });
      console.log(newReview)
    })
    .catch(console.log)
  };


/////////

handleCheckout = () => {
  alert("Your order is complete! Your items will be ready for you at the course! ");
    Promise.all([
      fetch('http://localhost:3000/api/v1/carts',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: 1,
          total_price: 0,
          check_out: false

        })
      })
      ,
      fetch(`http://localhost:3000/api/v1/carts/${this.state.current_cart.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          check_out: true
        })
      })
    ])
    .then(([resp1, resp2]) => {
      return Promise.all([resp1.json(), resp2.json()])
    })
    
    .then(([data1, data2]) => {
      console.log(data1, data2)
      this.setState({
        current_cart: data1.items, //cart_item,
        //  cartItems: []

        
      })
      
      
      console.log(data1)
       this.props.history.push("/golf_courses")
  
      //  this.setState({
      //    current_cart: data1.cart_item
      //  })

      })

     
     



    }


  render() {
    
    //console.log(this.state)
    //  console.log(this.state.cartItems)
  //  console.log(this.state.golfCourses)
  //   console.log(this.state.user)
  //   console.log(this.state.reviews)
    //console.log(this.state.current_cart)

    console.log("array were looking for", this.state.cartItems)
    return (
      
        <div className="App" >
          
          <Header/>
          <NavBar/>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
          <Route path="/cart" render={()=> <Cart handleCheckout={this.handleCheckout} cartItems ={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} />}  />
          <Route path="/items" render={()=> <ItemContainer items={this.state.items} addItemToCartClickHandler={this.addItemToCartClickHandler}/>} />
          <Route path="/golf_courses" render={()=> <GolfCourseContainer golfCourses={this.state.golfCourses}/>} />  
          <Route path="/userprofile" render={() => <UserProfileContainer user={this.state.user}/>} />
          <Route path="/reviews" render={() => <ReviewsContainer reviews={this.state.reviews} reviewChangeHandler={this.reviewChangeHandler} editSubmitHandler={this.editSubmitHandler}/>}/>
          <Route path="/logout" component={LogOut}/>
          <Route path="/van_cortlandt_golf_course" component={Vanny} />
        </div>
     
    )
  }
}
export default withRouter(App);