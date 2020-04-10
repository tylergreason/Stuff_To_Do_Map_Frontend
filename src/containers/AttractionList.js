import React, { Component } from 'react' 
import { connect } from 'react-redux'
import AttractionMapListCard from '../components/AttractionMapListCard'
import AttractionCardLarge from '../components/attractionCards/AttractionCardLarge'
import AttractionListCardLarge from '../components/attractionCards/AttractionListCardLarge'



class AttractionList extends Component {   
    state = {
        attractions:this.props.attractions, 
        attractionCardLargeToRender:''
    }

    renderAttractionCards = () => {
        if (this.props.attractions !== undefined){
            return this.props.attractions.map(attraction => {
                if (attraction.id === this.props.attraction.id){
                    return <AttractionListCardLarge
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

    // on click, fetch attraction's info, then render a big card for that attraction 
    attractionCardClick = (e)=> {
        this.setState({
            // attractionCardLargeToRender:e
        })
    }

    // check if user clicked outside the large card box, and reset the large card state if so (if it's not already nothing)
    handleClick = e => {
        console.log(e.target.classList)
        if (e.target.classList.contains("AttractionCardLargeInner") !== true){
            if (this.state.attractionCardLargeToRender !== ""){
                this.setState({
                    attractionCardLargeToRender:""
                })
            }
        }
    }

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
            {this.renderAttractionCards()}
            {this.state.attractionCardLargeToRender !== "" 
            ? 
            <AttractionCardLarge attractionId={this.state.attractionCardLargeToRender.id} 
                backClick={this.backToAttractionListClick}
            />
            :
            <></>
            }
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
export default connect(mapStateToProps)(AttractionList)