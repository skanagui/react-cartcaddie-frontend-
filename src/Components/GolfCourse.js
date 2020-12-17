import React, { Component } from 'react'

export default class GolfCourse extends Component {

    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.golfCourses.name}
            </div>
        )
    }
}
