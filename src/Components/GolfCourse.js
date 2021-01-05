import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NycCoursesHeader from '../Components/NycCoursesHeader'

export default class GolfCourse extends Component {

    
    render() {
        console.log(this.props)
        return (

            <div class="ui four column doubling stackable grid container" >
            <NavLink to="/items">
                <div class="column">
                <h3>{this.props.golfCourses.name}</h3>
                {/* {this.props.golfCourses.address} */}
                <img  class="ui medium bordered image" src="/images/wireframe/white-image.png"alt="course-image" src={this.props.golfCourses.image}></img>
                    
                </div>
            </NavLink>
            </div>

               

            )
    }
}
