

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./Components/Home.js";
// import NavBar from "./Containers/NavBar.js";
import Cart from "./Components/Cart.js";
import Login from "./Components/Login.js";
import ItemContainer from "./Containers/ItemContainer";
import GolfCourses from "./Components/GolfCourse.js"; 





export default class App extends Component {

  state = {
    courses: [],
    items: [],
    user: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/items")
    .then(resp => resp.json())
    .then(itemsArray => this.setState({items: itemsArray}))
  }; 

  






  render() {

    console.log 
    return (
      <Router>
       <div className="App">
          {/* <NavBar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart}  />
          <Route exact path="/login" component={Login} />
          <Route exact path="/items" component={ItemContainer} items={this.state.items} />
          <Route exact path="/golfcourses" component={GolfCourses}/>  
          
        </div>
    </Router>
    )
  }
}
