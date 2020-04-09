import React from 'react' 
import ReviewCard from '../components/reviewCards/ReviewCard'
// import { connect } from 'react-redux'

const styleClasses = "ReviewList informationBox"

const ReviewList = props => {
    console.log(props)
    return( 
        <div className={styleClasses}>
            {props.attraction.reviews.map(review => {
                return <ReviewCard attraction={props.attraction} review={review} key={review.id}/>
            })}
        </div>
    )
}

export default ReviewList