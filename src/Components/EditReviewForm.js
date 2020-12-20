import React, { Component } from 'react'

export default class EditReviewForm extends Component {

    state = {
        
        reviewTitle:this.props.review.title,
        reviewBody:this.props.review.body,
        reviewDate:this.props.review.date
    }




    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.editSubmitHandler(this.props.review)
        this.props.editClickHandler()
    }

    changeHandler = (e) => {

        e.persist();
        console.log('test', e.target.value)
        this.setState({

            reviewTitle:e.target.value,
            reviewBody:this.props.review.body,
            reviewDate:this.props.review.date


        })
    }

    
 



    render() {
        console.log(this.props)
        return (
            <form onSubmit ={this.localSubmitHandler}>
                <div className="form-group">
                Title:<input className="form-control" name = "title" value = {this.state.reviewTitle} onChange ={this.changeHandler}/>
                </div>
                <div className="form-group">
                Date:<input className="form-control" type=""  name = "date" value = {this.state.reviewDate} onChange={this.changeHandler} />
                </div>
                Body:<textarea className="form-control" name = "body" value = {this.state.reviewBody} onChange ={this.changeHandler} />
                <div className="form-group">
                <button className="btn btn-primary">Save Review!</button> 
                </div>

            </form>
        )
    }
}
