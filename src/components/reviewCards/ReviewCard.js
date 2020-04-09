import React from 'react' 

const ReviewCard = props => {
    return(
        <div className="ReviewCard informationBox">
            <p>{props.review.user_first_name} {props.review.user_last_name} said:</p>
            <p>{props.review.rating}⭐️</p>
            <p>{props.review.text}</p>
            <p>{props.review.created_at}</p>
        </div>
    )
}

export default ReviewCard