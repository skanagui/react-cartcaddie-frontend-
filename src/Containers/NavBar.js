import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {
  Menu, Dropdown
} from "semantic-ui-react";


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <menu horizontal className= "navbar" >
                <Menu.Item as={NavLink} to="/" exact>
                    Home 
                </Menu.Item>
                <Menu.Item as={NavLink} to="/cart_items" exact>
                    Cart
                </Menu.Item>
                <Menu.Item as={NavLink} to="/golf_courses" exact>
                    Golf Courses
                </Menu.Item>
                <Menu.Item as={NavLink} to="/items" exact>
                    Items
                </Menu.Item>
                <Menu.Item as={NavLink} to="/logout" exact>
                    Login
                </Menu.Item>
                </menu>



            </div>
        )
    }
}
