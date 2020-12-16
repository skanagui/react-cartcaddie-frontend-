import React, { Component } from 'react'

export default class GolfCourse extends Component {

    
    render() {
        return (
            <div>
                 {this.props.golfCourses.name}
            </div>
        )
    }
}
