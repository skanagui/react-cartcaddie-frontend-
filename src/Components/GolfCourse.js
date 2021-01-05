import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import  "../Styles/CourseCard.css"

export default class GolfCourse extends Component {

    
    render() {
        console.log(this.props)
        return (

           <NavLink to="/items">

            <Card className="card">
                <div >
                    <div >
                        <div class="image">
                          <img  alt="course-image" src={this.props.golfCourses.image}></img>
                         </div>
                         <div class="content">
                             <a class="header">{this.props.golfCourses.name}</a>
                        </div>

                    </div>

                </div>

            </Card>


            


            
                
            </NavLink>
          

                //  class="ui medium bordered image" src="/images/wireframe/white-image.png"

            )
    }
}
