import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from "semantic-ui-react";


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <menu   className= "navbar" >
                <Menu.Item className="login-link" as={NavLink} to="/login" exact>
                    Login <i class="golf ball icon"></i>
                </Menu.Item>
                <Menu.Item className="home-link" as={NavLink} to="/userprofile" exact>
                    Home <i class="home icon"></i>
                </Menu.Item>
                <Menu.Item className="home-link" as={NavLink} to="/golf_courses" exact>
                    Golf Courses <i class="flag icon"></i>
                </Menu.Item>
                <Menu.Item className="home-link" as={NavLink} to="/cart" exact>
                    Cart <i class="shopping cart icon"></i>
                </Menu.Item>
                <Menu.Item className="home-link" as={NavLink} to="/logout" exact>
                    Logout
                </Menu.Item>

                {/* <Menu.Item>
                                    <div class="ui compact menu">
                    <a class="item">
                        <i class="icon mail"></i> Messages
                        <div class="floating ui red label">5</div>
                    </a>
                    <a class="item">
                        <i class="icon users"></i> Friends
                        <div class="floating ui teal label">12</div>
                    </a>
                    </div>
                </Menu.Item> */}
                
                </menu>



            </div>
        )
    }
}
