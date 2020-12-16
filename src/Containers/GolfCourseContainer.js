import React, { Component } from 'react'
import GolfCourse from "./Components/GolfCourse.js"
export default class GolfCourseContainer extends Component {
    renderGolfCourses = () => {
        
        return this.props.golfCourses.map(golfCourseObj => <GolfCourse golfCourses = {golfCourseObj} key ={golfCourseObj.id}/>);
        
    }

    render() {
        return (
            <div className="golf-course-container" >
                {this.renderGolfCourses()}
            </div>
        );
    }
}
