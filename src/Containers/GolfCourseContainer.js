import React, { Component } from 'react'
import GolfCourse from "../Components/GolfCourse"
import NycCoursesHeader from '../Components/NycCoursesHeader';
import { Card, Grid, Divider } from "semantic-ui-react"
import  "../Styles/CourseCard.css"

export default class GolfCourseContainer extends Component {
    renderGolfCourses = () => {
        // return <p>hi</p>
        const gc = this.props.golfCourses.map(golfCourseObj => <GolfCourse golfCourses = {golfCourseObj} key ={golfCourseObj.id}/>);
        return gc
    }

    render() {
        return (
                <>
             <h2><NycCoursesHeader></NycCoursesHeader></h2>
             <br></br>
            {/* <Card.Group class="container" itemsPerRow={3}>
            </Card.Group> */}
            <Grid columns={3} container relaxed>
               {this.renderGolfCourses()} 
            </Grid>
                
                </>
             
        );
    }
}
