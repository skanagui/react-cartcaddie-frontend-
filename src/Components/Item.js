import React, { Component } from 'react'



export default class Item extends Component {

    addItemToCartHandler = () => {
        console.log("clicked")
        this.props.addItemToCartClickHandler(this.props.items)
    }



    render() {

        return (
            <div onClick={this.addItemToCartHandler}>

                <h2>{this.props.items.name}</h2>
                <img src={this.props.items.image}></img>
                <h3>${this.props.items.price}</h3>
                <div>{this.props.items.description}</div>
        
        
            </div>
        );
    }
}
