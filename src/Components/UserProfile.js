import React, { Component } from 'react'

export default class UserProfile extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Welcome Back!</h2>
                {this.props.items.name}
                <br></br>
                {this.props.items.email_address}
            </div>
        )
    }
}
