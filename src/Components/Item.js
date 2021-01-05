import React, { Component } from 'react'



export default class Item extends Component {

    addItemToCartHandler = () => {
        console.log("clicked")
        this.props.addItemToCartClickHandler(this.props.items)
    }



    render() {

        return (
            <div >

                <h2>{this.props.items.name}</h2>
                <img class="ui medium bordered image" src="/images/wireframe/white-image.png" alt="item" src={this.props.items.image}></img>
                <h3>${this.props.items.price}</h3>
                <div>{this.props.items.description}</div>
                <button onClick={this.addItemToCartHandler}>Add Item</button>
                
        
        
            </div>
        );
    }
}
