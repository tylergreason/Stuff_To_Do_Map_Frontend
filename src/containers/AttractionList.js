import React, { Component } from 'react' 
import { connect } from 'react-redux'
import AttractionMapListCard from '../components/attractionCards/AttractionMapListCard'
import AttractionListCardLarge from '../components/attractionCards/AttractionListCardLarge'
import { getAttraction } from '../store/actions/AttractionActions'
import { OTMAttractionCardSmall } from '../components/attractionCards/OTMAttractionCardSmall'

class AttractionList extends Component {   
    state = {
        attractions:this.props.attractions
    }

    renderAttractionsListingHeader = (type) => {
            let headerText=''; 
            let listCount = ''; 
        if (type === 'user'){
            headerText = "User listings"; 
            listCount = this.props.attractions.length; 
        }else{
            headerText = "OTM listings"
            listCount = this.props.otmAttractions.length; 
        }
        return (
            <h1>
                {headerText} ({listCount}):
            </h1>
        )
    }

    renderAttractionCards = () => {
        if (this.props.attractions !== undefined){
            return this.props.attractions.map(attraction => {
                if (attraction.id === this.props.attraction.id){
                    return <AttractionListCardLarge
                                key={attraction.id}
                                attraction={attraction}
                            />
                }else{
                    return <AttractionMapListCard 
                    key={attraction.id} 
                    attraction={attraction}
                    onClick={this.attractionCardClick}
                    /> 
                }
            })
        }
    }

    renderOTMAttractionsHeader = () => {
        return(
            <h4>
                OTM Listings ({this.props.otmAttractions.length}):
            </h4>
        )
    }

    renderOTMAttractionCards = () => {
        if (this.props.otmAttractions !== ""){
            return this.props.otmAttractions.map(attraction => {
                // console.log(attraction)
                return OTMAttractionCardSmall(attraction)
            })
        }
    }

    // on click, fetch attraction's info, then render a big card for that attraction 
    attractionCardClick = (e)=> {
        // debugger
        this.props.getAttraction(e.id)
        }

    // check if user clicked outside the large card box, and reset the large card state if so (if it's not already nothing)
    // handleClick = e => {
    //     console.log(e.target.classList)
    //     if (e.target.classList.contains("AttractionCardLargeInner") !== true){
    //         if (this.state.attractionCardLargeToRender !== ""){
    //             this.setState({
    //                 attractionCardLargeToRender:""
    //             })
    //         }
    //     }
    // }

    backToAttractionListClick = (e) => {
        e.preventDefault()
        this.setState({
            attractionCardLargeToRender:""
        })
    }
    render(){
        return(
        <div className="AttractionList" 
            // onClick={this.handleClick}
        >
            {this.renderAttractionsListingHeader('user')}
            {this.renderAttractionCards()}
            {this.renderAttractionsListingHeader('otm')}
            {this.renderOTMAttractionCards()}
            {/* {this.state.attractionCardLargeToRender !== "" 
            ? 
            <AttractionCardLarge attractionId={this.state.attractionCardLargeToRender.id} 
                backClick={this.backToAttractionListClick}
            />
            :
            <></> */}
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
            attractions: state.map.attractions,
            attraction:state.attraction.attraction
            }
}
export default connect(mapStateToProps, { getAttraction })(AttractionList)