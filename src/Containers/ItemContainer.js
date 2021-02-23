import React, { Component } from 'react';
import Item from "../Components/Item";
import { Grid, Card } from 'semantic-ui-react'

export default class ItemContainer extends Component {

    renderItems = () => {
        return this.props.items.map(itemObj => <Item addItemToCartClickHandler ={this.props.addItemToCartClickHandler} items = {itemObj} key ={itemObj.id}/>);
    }

    render() {
        return (

            <>
                <br></br>

                <Grid columns={3} container relaxed>
                        {this.renderItems()}
                </Grid>

                <br></br>

            </>

            


            );
    }
}