import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import  "../Styles/CourseCard.css"

export default class GolfCourse extends Component {

    render() {
        // console.log(this.props)
        return (

           <NavLink to="/items">
                <Card className="card">
                    <Card.Content>
                        <Card.Header>
                        {this.props.golfCourses.name}
                        </Card.Header>
                        <Image fluid centered medium src={this.props.golfCourses.image}/>
                        {/* <img src={this.props.golfCourses.image} height={300}></img> */}
                    </Card.Content>
                </Card>
            </NavLink>

        )
    }
}
