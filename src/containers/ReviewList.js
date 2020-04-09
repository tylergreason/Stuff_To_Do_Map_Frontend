import React from 'react' 
import ReviewCard from '../components/reviewCards/ReviewCard'



const ReviewList = props => {
    return( 
        <div className='ReviewList'>
            {props.attraction.reviews.map(review => {
                return <ReviewCard attraction={props.attraction} review={review}/>
            })}
        </div>
    )
}


export default ReviewList