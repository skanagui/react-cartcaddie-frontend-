
import React, { Component } from 'react'
import CartItem from "../Components/CartItem.js";
import { Grid} from 'semantic-ui-react'


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
        // console.log(this.props.cartItems[0].price)
        return this.props.cartItems.map(cartItemObj => <CartItem removeItemFromCart={this.props.removeItemFromCart} cartItem = {cartItemObj} key ={cartItemObj.id}/>);
        
    }

    render() {
        
        console.log(this.props)
        return (

            <>
            {this.props.cartItems.length ? <div className = "cart-item-container">
                <h1>Cart Items</h1>
                <Grid columns={3} container relaxed>
                {this.renderCartItems()}

                </Grid>
                
               
                <br></br>
                <br></br>
                <div class="ui divider"></div>


                

                <div className="cart-total">
                <h1>Cart Total:$ {this.props.cartItems.reduce((a,b)=>a+(b.item.price), 0)} </h1>
                     <form onSubmit={this.handleCheckout}>
                            
                        <button large class="ui green button" type="submit"><i class="golf ball icon"></i>
                                Checkout
                        </button>
                            
                    </form>
                </div>
            </div> : <div><div class="ui segment"><div class="ui active transition visible inverted dimmer"><div class="content"><div class="ui inverted text loader">Loading Cart</div></div></div><img src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" class="ui image"/></div></div>   }
            

            </>
        );
    }
}
