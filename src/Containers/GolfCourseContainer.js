import React, { Component } from 'react'
import GolfCourse from "../Components/GolfCourse"
import NycCoursesHeader from '../Components/NycCoursesHeader';
import { Card} from "semantic-ui-react"

export default class GolfCourseContainer extends Component {
    renderGolfCourses = () => {
        // return <p>hi</p>
        const gc = this.props.golfCourses.map(golfCourseObj => <GolfCourse golfCourses = {golfCourseObj} key ={golfCourseObj.id}/>);
        return gc
    }

    render() {
        return (

                
            <Card.Group itemsPerRow={3} >
                <h2><NycCoursesHeader></NycCoursesHeader></h2>
                <br></br>
                {this.renderGolfCourses()}
            </Card.Group>
        );
    }
}
