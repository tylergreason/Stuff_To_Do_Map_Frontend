import React from 'react' 
import {connect} from 'react-redux'
import Button from '../general/Button'
import { deleteReview } from '../../store/actions/ReviewActions'

const ReviewCard = props => {
    return(
        <div className="ReviewCard ">
            {props.user_id === props.review.user_id
            ?
            <Button name="" text="Delete" onClick={() => props.deleteReview(props.review)}/>
            :
            <></>
            }
            <p>{props.review.user_first_name} {props.review.user_last_name} said:</p>
            <p>{props.review.rating}<span role="img" aria-label="star">⭐️</span></p>
            <p>{props.review.text}</p>
            <p>{props.review.created_at}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        user_id:state.user.user.id
    }
}
export default connect(mapStateToProps, { deleteReview })(ReviewCard)