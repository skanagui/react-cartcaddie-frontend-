
import React, { Component } from 'react'
import CartItem from "../Components/CartItem.js";
import CheckOut from "../Components/CheckOut";

export default class Cart extends Component {
    
    renderCartItems = () => {
        
        const cartItem= this.props.cartItems.map(cartItemObj => <CartItem removeItemFromCart={this.props.removeItemFromCart} cartItem = {cartItemObj} key ={cartItemObj.id}/>);
        return cartItem
    }

    render() {
        console.log(this.props.cartItems)
        return (
            <div className="cart-item-container" >
                {this.renderCartItems()}
                <CheckOut/>
            </div>
        );
    }
}
