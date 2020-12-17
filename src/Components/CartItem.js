import React, { Component } from 'react'

export default class CartItem extends Component {

    state = {
        clicked: false
    }

    localRemoveItemHandler = () => {

        this.props.removeItemFromCart(this.props.cartItem)

    }




    render() {
          console.log(this.props.cartItem)
        return (
            <div class = "card" >

                Cart Items 
                
                <h2 >{this.props.cartItem.item.name}</h2> 
                <h3>{this.props.cartItem.item.price}</h3>
                <img alt ="item" src={this.props.cartItem.item.image}/>
                <p>{this.props.cartItem.item.description}</p>
                <button type ="button" class="btn btn-danger" onclick={e=> this.localRemoveItemHandler}>Remove From Cart</button>
            </div>
        )
    }


}
