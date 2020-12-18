import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.review.title}</h1>
                <p>{this.props.review.body}</p>
                <h3>{this.props.review.date}</h3>
            </div>
        )
    }
}
