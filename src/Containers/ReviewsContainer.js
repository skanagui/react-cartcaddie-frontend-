import React, { Component } from 'react'
import Review from "../Components/Review"

export default class ReviewsContainer extends Component {

   state = {
       currentReview: {

       },
       form: false


   }

//    changeHandler = (e) => {
//        this.setState({currentReview: {...this.state.currentReview, [e.target.name]: e.target.value}}, ()=>console.log(this.state.currentReview))
//    }

   clickHandler = () => {
       this.setState(prevState => ({form: !prevState.form}))
   }

    // renderReviews = (e) => {
    //     const title = e.target.innerText
    //     const review = this.props.reviews.find(review => review.title === title)
    //     this.setState({currentReview: review}, () => console.log(this.state.currentReview))
    // }
    
    renderAllRevs=()=> {
        return this.props.reviews.map(reviewObj => <Review changeHandler ={this.changeHandler} editSubmitHandler ={this.props.editSubmitHandler} review = {reviewObj} key ={reviewObj.id}/>);


    }

    render() {
        return (
            <div className="reviews-container" >
                {this.renderAllRevs()}
                
            </div>
        );
    }
}
