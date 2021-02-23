import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import  "../Styles/CourseCard.css"

export default class GolfCourse extends Component {

    

    render() {
        // console.log(this.props)
        return (

            <>
            <br></br>
            <Card className="card">
                    <Card.Content>
                    <NavLink to="/items">
                        <Card.Header>
                        {this.props.golfCourses.name}
                        </Card.Header>
                    </NavLink>
                        <Image fluid centered medium  src={this.props.golfCourses.image}/>
                        {this.props.golfCourses.address}
                        {/* <Image src={this.props.golfCourses.scorecard}/> */}
                    </Card.Content>
                    {/* <button>More Info</button> */}
            </Card>
            </>


        )
    }
}
