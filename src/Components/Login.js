import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';



class Login extends React.Component{


    state= {
        email_address: '',
        password_digest: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state)

        return(
            <div className="form">
                <form >
                <input name="email_address" type="text" placeholder="email address" value={this.state.username} onChange={this.changeHandler} />
                <input name="password_digest" type="password" placeholder="password" value={this.state.password_digest} onChange={this.changeHandler} />
                <NavLink to={`/userprofile`} >
                    <button type="submit">Log In</button>
                </NavLink>
                </form>
            </div>

        )
    }

}


export default Login