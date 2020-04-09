import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttraction } from '../../store/actions/AttractionActions'
import ReviewList from '../../containers/ReviewList'
import WriteReviewCard from '../reviewCards/WriteReviewCard'

const cardClass = "AttractionCardLarge animated fadeIn"

class AttractionCardLarge extends Component {

    setAttraction = (attraction) => {
        this.setState({
            attraction:attraction 
        })
    }

    componentDidMount = () =>{
        this.props.getAttraction(this.props.attraction.id,this.setAttraction)
    }

    renderReviewList = () => {
        // debugger
        if (this.state !== null){
            return <ReviewList attraction={this.state.attraction} />
        }
    }

    renderWriteReviewCard = () => {
        return <WriteReviewCard />
    }

    renderBackButton = () => {
        return (
            <button onClick={this.props.backClick}>Back</button>
        )
    }
    render(){
        return (
        <div className={cardClass}>
            {/* <h1>ATTRACTION CARD LARGE</h1> */}
            <div className="AttractionCardLargeInner informationBox">
                {this.renderBackButton()}
                <br></br>
                <h4 className="name">{this.props.attraction.name}</h4>
                <span className="cardRating"> - {this.props.attraction.average_rating}⭐️</span>
                <span className="address">
                {`${this.props.attraction.house_number} ${this.props.attraction.road}, ${this.props.attraction.city}, ${this.props.attraction.state}, ${this.props.attraction.country}`}
                </span>
                <p className="description">DESC {this.props.attraction.description}</p>
                <label>Reviews</label>

            {this.renderReviewList()}
            {this.renderWriteReviewCard()}
            </div>
        </div>)
    }
}

export default connect(null, {getAttraction})(AttractionCardLarge)