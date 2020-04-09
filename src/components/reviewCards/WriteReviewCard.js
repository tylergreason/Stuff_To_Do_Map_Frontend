import React, { Component } from 'react' 
import {connect} from 'react-redux' 

class WriteReviewCard extends Component {

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
            return <div>You're not logged in!</div>
        }
    }

    submitReview = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    renderWriteReview = () => {
        return ( 
            <form className="WriteReviewCard">
                {/* <br></br> */}
                <label>Write Review</label>
                <span className="ratingSelect">
                    <label>Rating</label>
                    <select name="rating" onChange={this.handleOptionSelect}>
                        <option name="rating" selected value=""></option>
                        <option name="rating" value="1">1</option>
                        <option name="rating" value="2">2</option>
                        <option name="rating" value="3">3</option>
                        <option name="rating" value="4">4</option>
                        <option name="rating" value="5">5</option>
                    </select>
                </span>
                <textarea
                    className="informationBox writeReviewText"
                    name="text"
                    onChange={this.handleInput}
                ></textarea>
                <br></br>
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

export default connect(mapStateToProps)(WriteReviewCard)