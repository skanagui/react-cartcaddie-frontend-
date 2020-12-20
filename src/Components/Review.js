import React, { Component } from 'react'
import EditReviewForm from './EditReviewForm'

export default class Review extends Component {

    state ={
        
        edit: false
    }

    editClickHandler = () => {
        this.setState(prevState => ({edit: !prevState.edit}), ()=>console.log(this.state.edit))
    }

    // changeHandler = (e) => {
    //     //this.setState({currentReview: {...this.state.currentReview, [e.target.name]: e.target.value}}, ()=>console.log(this.state.currentReview))
    //     console.log('test', e.target.value)
    //     this.setState({review: e.target.value})
    // }


    render() {
        return (
            <div>
                {this.state.edit ?
                  <EditReviewForm review={this.props.review} changeHandler ={this.props.changeHandler} editSubmitHandler={this.props.editSubmitHandler} editClickHandler={this.editClickHandler}/> 
                :
                <div>
                    <h1>{this.props.review.title}</h1>
                    <p>{this.props.review.body}</p>
                    <h3>{this.props.review.date}</h3>
                    <button onClick={this.editClickHandler}>Edit</button><button >Delete</button>
                </div>
            }

            </div>
        )
    }
}
