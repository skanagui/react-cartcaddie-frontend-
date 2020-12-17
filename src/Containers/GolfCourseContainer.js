import React, { Component } from 'react'
import GolfCourse from "../Components/GolfCourse"

export default class GolfCourseContainer extends Component {
    renderGolfCourses = () => {
        // return <p>hi</p>
        const gc = this.props.golfCourses.map(golfCourseObj => <GolfCourse golfCourses = {golfCourseObj} key ={golfCourseObj.id}/>);
        return gc
    }

    render() {
        return (
            <div className="golf-course-container" >
                {this.renderGolfCourses()}
            </div>
        );
    }
}
