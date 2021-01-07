import React, { Component } from 'react';
import {Card, Image} from 'semantic-ui-react'

export default class UserProfile extends Component {

    render() {
        console.log(this.props)
        return (

            <Card centered >

            <div className="profile">
                <h2>Welcome Back!</h2>
                {this.props.items.name}
                <br></br>
                {this.props.items.email_address}
                <br>
                </br>
                <Image wrapped  height="150px"  src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_north,h_273,q_auto,w_414/v1/pgatour/editorial/2020/07/26/silhouette-1268-getty.jpg"></Image>
                <h3>Handicap Index: 3.4</h3>
            </div>


            </Card>
        )
    }
}
