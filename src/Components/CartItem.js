import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
         console.log(this.props.cartItem)
        return (
            <div >
                
                <h2>{this.props.cartItem.item.name}</h2>
               
            </div>
        )
    }
}
