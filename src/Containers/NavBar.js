import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {
  Menu
} from "semantic-ui-react";


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <menu  className= "navbar" >
                <Menu.Item as={NavLink} to="/login" exact>
                    Login
                </Menu.Item>
                <Menu.Item as={NavLink} to="/userprofile" exact>
                    Home 
                </Menu.Item>
                <Menu.Item as={NavLink} to="/cart_items" exact>
                    Cart
                </Menu.Item>
                <Menu.Item as={NavLink} to="/golf_courses" exact>
                    Golf Courses
                </Menu.Item>
                <Menu.Item as={NavLink} to="/logout" exact>
                    Logout
                </Menu.Item>
                
                </menu>



            </div>
        )
    }
}
