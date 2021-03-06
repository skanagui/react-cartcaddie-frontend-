import React, { Component } from 'react'

export default class CartItem extends Component {

    

    localRemoveItemHandler = () => {

        this.props.removeItemFromCart(this.props.cartItem)

    }




    render() {
          console.log(this.props.cartItem)
        return (
            <div className = "card" >

                Cart Items 
                <img alt ="item" src={this.props.cartItem.item.image}/>
                <h2 >{this.props.cartItem.item.name}</h2> 
                <h3>${this.props.cartItem.item.price}.00</h3>
                <h3>QTY:{this.props.cartItem.quantity}</h3>
                <p>{this.props.cartItem.item.description}</p>
                <button type ="button" class="btn btn-danger" onClick={this.localRemoveItemHandler}>Remove From Cart</button>
            </div>
        )
    }


}
