import React, { Component } from 'react';
import Item from "../Components/Item";

export default class ItemContainer extends Component {

    renderItems = () => {
        return this.props.items.map(itemObj => <Item addItemToCartClickHandler ={this.props.addItemToCartClickHandler} items = {itemObj} key ={itemObj.id}/>);
    }

    render() {
        return (
            <div className="item-container" >
                {this.renderItems()}
            </div>
        );
    }
}