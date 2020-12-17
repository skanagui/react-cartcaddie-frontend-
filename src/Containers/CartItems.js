
import React, { Component } from 'react'
import CartItem from "../Components/CartItem.js";

export default class CartItems extends Component {
    
    renderCartItems = () => {
        
        const cartItem= this.props.cartItems.map(cartItemObj => <CartItem cartItem = {cartItemObj} key ={cartItemObj.id}/>);
        return cartItem
    }

    render() {
        console.log(this.props.cartItems)
        return (
            <div className="cart-item-container" >
                {this.renderCartItems()}
            </div>
        );
    }
}
