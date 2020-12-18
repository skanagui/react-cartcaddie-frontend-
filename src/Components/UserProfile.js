import React, { Component } from 'react'

export default class UserProfile extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Welcome</h2>
                {this.props.items.name}
                {this.props.items.email_address}
            </div>
        )
    }
}
