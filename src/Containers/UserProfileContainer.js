import React, { Component } from 'react'
import UserProfile from "../Components/UserProfile"
import { NavLink, Redirect } from 'react-router-dom'

export default class UserProfileContainer extends Component {
    renderUser = () => {
        return this.props.user.map(userObj => <UserProfile user ={this.props.user}  items = {userObj} key ={userObj.id}/>);
    }
    
    render() {
        console.log(this.props.user)
        return (
            
            <div className="user-profile-container" >
                {this.renderUser()}
            </div>

            
        );
    }
}
