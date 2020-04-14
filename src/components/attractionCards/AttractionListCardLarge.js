import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getAttraction } from '../../store/actions/AttractionActions'
import ReviewList from '../../containers/ReviewList'
import WriteReviewCard from '../reviewCards/WriteReviewCard'


import { renderAddress, renderRating } from './attractionCardGeneralFunctions'

const cardClass = "AttractionListCardLarge animated"

class AttractionListCardLarge extends Component {

    componentDidMount = () => {
        // scroll this card into view upon mounting 
        const thisCard = document.getElementById(`attractionMapListCardLarge${this.props.attraction.id}`)
        thisCard.scrollIntoView()
    }

    renderReviewList = (attraction) => {
        if (attraction.reviews.length < 1){
        }else{
            return(
                <>
                    <label>Reviews</label>
                    <ReviewList attraction={attraction} />
                </>
            ) 
        }
    }

    renderWriteReviewCard = () => {
        return <WriteReviewCard attractionId={this.props.attraction.id}/>
    }

    renderBackButton = () => {
        return (
            <button onClick={this.props.backClick}>Back</button>
        )
    }

    renderAddress = (attraction) =>{
        return (
            <span className="address">
                {`${attraction.house_number || ''} ${attraction.road || ''}, ${attraction.city || ''}, ${attraction.state || ''}, ${attraction.country || ''}`}
            </span>
        )
    }

    render(){
        return (
        <div className={cardClass} id={`attractionMapListCardLarge${this.props.attraction.id}`}>
            <div className="AttractionListCardLargeInner">
                <br></br>
                <h4 className="name">{this.props.attraction.name}</h4>
                {renderRating(this.props.attraction)}
                {renderAddress(this.props.attraction)}
                <p className="description">{this.props.attraction.description}</p>
                {this.renderReviewList(this.props.attraction)}
            {this.renderWriteReviewCard()}
            </div>
        </div>)
    }
}
const mapStateToProps = state => {
    return state = {
        attraction:state.attraction.attraction
    }
}
export default connect(mapStateToProps, {getAttraction})(AttractionListCardLarge)