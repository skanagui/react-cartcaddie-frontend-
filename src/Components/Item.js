import React, { Component } from 'react'
import {Card, Image} from 'semantic-ui-react'
import "../Styles/ItemCard.css"



export default class Item extends Component {

    addItemToCartHandler = () => {
        console.log("clicked")
        this.props.addItemToCartClickHandler(this.props.items)
    }



    render() {

        

        return (




           
            <Card >
                <Card.Content>
                    <Card.Header>
                          {this.props.items.name} : {this.props.items.description}
                    
                    
                    </Card.Header>
                    <Image fluid centered medium src={this.props.items.image}/>
                    <button class="ui yellow button">${this.props.items.price}.00 </button><button class="ui green button" onClick={this.addItemToCartHandler}>Add Item</button>

                </Card.Content>
            </Card>
        

            
            // <div className="card" >

            //     <h2>{this.props.items.name}</h2>
            //     <img alt="item" src={this.props.items.image}></img>
            //     <h3>${this.props.items.price}</h3>
            //     <div>{this.props.items.description}</div>
                
            // </div>
            
        );
    }
}
