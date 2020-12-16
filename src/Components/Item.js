import React, { Component } from 'react'



export default class Item extends Component {
    render() {
        return (
            <div>

                <h2>{this.props.items.name}</h2>
                <div src={this.props.items.image}></div>
                <h3>${this.props.items.price}</h3>
                <div>{this.props.items.description}</div>
        
        
            </div>
        );
    }
}
