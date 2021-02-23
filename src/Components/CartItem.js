import React, { Component } from 'react'
import {Card, Image, Grid} from 'semantic-ui-react'

export default class CartItem extends Component {

    

    localRemoveItemHandler = () => {

        this.props.removeItemFromCart(this.props.cartItem)

    }




    render() {
          console.log(this.props.cartItem)
        return (

            <>
            <br></br>

            <Card className="item-card">
                <Card.Content>
                    <Card.Header>
                    <button class="ui green button">${this.props.cartItem.item.price}</button>{this.props.cartItem.item.name}
                  <br></br>
                    
                    </Card.Header>
                    <Image fluid centered medium src={this.props.cartItem.item.image}/>
                    Description: {this.props.cartItem.item.description}
                   <button class="ui yellow button">QTY:{this.props.cartItem.quantity}</button> <button type ="button" className="btn btn-danger" onClick={this.localRemoveItemHandler}>Remove From Cart</button>

                </Card.Content>
            </Card>
            <br></br>
            </>
            






            
        )
    }


}
