import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import { addReview } from '../../store/actions/ReviewActions'
import { ServerResponseCard } from '../ServerResponseCard'

class WriteReviewCard extends Component {
    state = {
        text:'', 
        rating:'', 
        returnMessage:''
    }
    handleInput = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleOptionSelect = e => {
        this.setState({
            rating: e.target.value
        })
    }

    renderNotLoggedIn = () =>{
        if (!this.props.loggedIn){
            return <div>You must be logged in to leave a review</div>
        }
    }

    renderReturnMessage = () => {
        return( 
            <div>{this.state.returnMessage}</div>
        )
    }

    returnMessage = message => {
        this.setState({
            returnMessage:message
        })
    }

    componentDidUpdate = () => {
        if (this.state.returnMessage.success){
            this.setState({
                returnMessage:"",
                text:""
            })
            this.clearWriteReviewArea()
        }
    }

    submitReview = (e) => {
        e.preventDefault();
        const review = {
            // format object keys the Ruby way (snake case)
            attraction_id: this.props.attractionId, 
            text: this.state.text, 
            rating: this.state.rating 
        }
        // submit review and get return message to show 
        this.props.addReview(review,this.returnMessage)
    }

    clearWriteReviewArea = () =>{
        console.log('write review fired')
        const textArea = document.getElementById('writeReviewTextArea')
        textArea.value = ''
        const reviewRatingOptionSelect = document.getElementById('rating')
        reviewRatingOptionSelect.value = ''
    }

    renderWriteReview = () => {
        return ( 
            <form className="WriteReviewCard">
                {/* <br></br> */}
                <label>Write Review</label>
                <span className="ratingSelect">
                    <label>Rating</label>
                    <select name="rating" onChange={this.handleOptionSelect} id='rating'>
                        <option className="ratingSelectOption" name="rating" defaultValue value=""></option>
                        <option name="rating" value="1">1</option>
                        <option name="rating" value="2">2</option>
                        <option name="rating" value="3">3</option>
                        <option name="rating" value="4">4</option>
                        <option name="rating" value="5">5</option>
                        <option name="rating" value="6">6</option>
                        <option name="rating" value="7">7</option>
                        <option name="rating" value="8">8</option>
                        <option name="rating" value="9">9</option>
                        <option name="rating" value="10">10</option>
                    </select>
                </span>
                <textarea
                    className="informationBox writeReviewText"
                    name="text"
                    onChange={this.handleInput}
                    id="writeReviewTextArea"
                ></textarea>
                <br></br>
                <ServerResponseCard response={this.state.returnMessage} />
                <button
                    onClick={this.submitReview}
                >Submit Review</button>
            </form>
        )
    }

    render(){
        return(
            <div>
            {this.props.loggedIn
            ?
            this.renderWriteReview()
            :
            this.renderNotLoggedIn()
            }
        </div>
        )
    }

}
const mapStateToProps = state =>{
    return state={
        loggedIn:state.user.loggedIn
    }
}

export default connect(mapStateToProps, { addReview })(WriteReviewCard)