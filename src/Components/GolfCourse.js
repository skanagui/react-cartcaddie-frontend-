import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class GolfCourse extends Component {

    
    render() {
        console.log(this.props)
        return (

            <NavLink to="/items">
                <div>
                    {this.props.golfCourses.name}
                </div>
            </NavLink>

            )
    }
}
