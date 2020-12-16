import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
        <h3>{this.props.items.name}</h3>
        {/* <p>{this.props.item.content}</p>
        <p>
          <strong>-{this.props.poem.author}</strong>
        </p> */}
        
        
      </div>
        )
    }
}
