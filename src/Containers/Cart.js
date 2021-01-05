
import React, { Component } from 'react'
import CartItem from "../Components/CartItem.js";


export default class Cart extends Component {

    state=  {

        price: 0,
        cart: [],
    }

    // componentDidMount() {
    //     fetch("http://localhost:3000/api/v1/carts")
    //     .then((resp) => resp.json())
    //     .then(console.log)

    // }

    handleCheckout = (e) => {
        e.preventDefault();
    
        this.props.handleCheckout(e);
    };



    
    

    // checkout =()=> {
    //     this.state.cart.forEach((item) =>
    //     fetch(`http://localhost:3000/api/v1/carts${item.id}`, {
    //         method: "PATCH", 
    //         body: JSON.stringify({
    //             check_out: true,
    //         }),
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //     })
    //   )
    // }



    renderCartItems = () => {
        
        const cartItem= this.props.cartItems.map(cartItemObj => <CartItem removeItemFromCart={this.props.removeItemFromCart} cartItem = {cartItemObj} key ={cartItemObj.id}/>);
        return cartItem
    }

    render() {
        console.log(this.props.cartItems)
        return (
            <div className = "cart-item-container">
                <h1>Cart Items</h1>
                
                {this.renderCartItems()}

                <div>
                     <form onSubmit={this.handleCheckout}>
                            
                        <button className="button primary" type="submit"><i class="golf ball icon"></i>
                                Checkout
                        </button>
                            
                    </form>
                </div>
            </div>
        );
    }
}
