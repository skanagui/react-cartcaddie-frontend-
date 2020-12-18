import React, { Component } from 'react'
import Review from "../Components/Review"

export default class ReviewsContainer extends Component {

    renderReviews = () => {
        return this.props.reviews.map(reviewObj => <Review review = {reviewObj} key ={reviewObj.id}/>);
    }

    render() {
        return (
            <div className="reviews-container" >
                {this.renderReviews()}
            </div>
        );
    }
}
