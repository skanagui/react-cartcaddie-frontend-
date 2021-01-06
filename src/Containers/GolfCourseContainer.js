import React, { Component } from 'react'
import GolfCourse from "../Components/GolfCourse"
import NycCoursesHeader from '../Components/NycCoursesHeader';
import { Card, Divider } from "semantic-ui-react"
import  "../Styles/CourseCard.css"

export default class GolfCourseContainer extends Component {
    renderGolfCourses = () => {
        // return <p>hi</p>
        const gc = this.props.golfCourses.map(golfCourseObj => <GolfCourse golfCourses = {golfCourseObj} key ={golfCourseObj.id}/>);
        return gc
    }

    render() {
        return (
                
            // <h2><NycCoursesHeader></NycCoursesHeader></h2>
            <Card.Group class="container" itemsPerRow={2}>{this.renderGolfCourses()}</Card.Group>
                
             
        );
    }
}
