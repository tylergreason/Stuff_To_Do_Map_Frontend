import React, { Component } from 'react' 
import { connect } from 'react-redux'
import AttractionMapListCard from '../components/attractionCards/AttractionMapListCard'
import AttractionListCardLarge from '../components/attractionCards/AttractionListCardLarge'
import { getAttraction } from '../store/actions/AttractionActions'
import { highlightAttraction } from '../store/actions/MapActions'
import { toggleHoveredClass } from '../generalFunctions'
import  OTMAttractionCardSmall from '../components/attractionCards/OTMAttractionCardSmall'
import OTMAttractionCardLarge from '../components/attractionCards/OTMAttractionCardLarge'


class AttractionList extends Component {   
    state = {
        attractions:this.props.attractions,
        selectedOTMAttractionId:'',
        selectedOTMXid:''
    }

    // render a header for attraction list for either user or OTM listings
    renderAttractionsListingHeader = (type) => {
            let headerText=''; 
            let listCount = ''; 
            let onClick = '';
        if (type === 'user'){
            headerText = "User Attractions"; 
            if (this.props.attraction.length !== undefined){
                listCount = this.props.attractions.length; 
            }
            onClick = this.toggleAttractionListHidden;
        }else{
            headerText = "Historical Districts"
            if (this.props.otmAttractions !== undefined){
                listCount = this.props.otmAttractions.length; 
            }else{
                listCount = 0   ; 
            }
            onClick=this.toggleOTMAttractionListHidden
        }
        return (
            <div
                className={'listHeader'}
                onClick={onClick}
            >
                {headerText} ({listCount}):
            </div>
        )
    }

    toggleAttractionListHidden = () => {
        // find the attraction list and toggle its hidden. 
        const attractionList = document.getElementById('attractionList'); 
        attractionList.hidden = !attractionList.hidden; 
    }

    toggleOTMAttractionListHidden = () => {
        // find the OTM attraction list and toggle its hidden. 
        const otmAttractionList = document.getElementById('otmAttractionList'); 
        otmAttractionList.hidden = !otmAttractionList.hidden; 
    }

    renderAttractionCards = () => {
        if (this.props.attractions !== undefined){
            return this.props.attractions.map(attraction => {
                if (attraction.id === this.props.attraction.id){
                    return <AttractionListCardLarge
                                key={attraction.id}
                                attraction={this.props.attraction}
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

    renderOTMAttractionCards = () => {
        if (this.props.otmAttractions !== "" && this.props.otmAttractions !== undefined){
            return this.props.otmAttractions.map(attraction => {
                // render large card if ids match 
                if (attraction.properties.xid === this.props.highlightAttractionId){
                    return <OTMAttractionCardLarge 
                            xid={attraction.properties.xid}
                            />
                }else{

                    return <OTMAttractionCardSmall 
                    attraction={attraction} 
                    onClick={this.otmAttractionCardClick}
                    />
                }
            })
        }
    }

    // on click, fetch attraction's info, then render a big card for that attraction 
    attractionCardClick = (e)=> {
        this.props.getAttraction(e.id)
    }

    otmAttractionCardClick = (xid) => {
        // select the otm attraction to be highlighted 
        this.props.highlightAttraction(xid)
        toggleHoveredClass('otmIcon',xid)
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
        >
            {this.renderAttractionsListingHeader('user')}
            <div id="attractionList" hidden={true}>
                {this.renderAttractionCards()}
            </div>
            {this.renderAttractionsListingHeader('otm')}
            <div id='otmAttractionList' 
                // hidden={true}
            >
                {this.renderOTMAttractionCards()}
            </div>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
            attractions: state.map.attractions,
            attraction:state.attraction.attraction,
            highlightAttractionId:state.map.highlightAttraction
            }
}
export default connect(mapStateToProps, { getAttraction, highlightAttraction })(AttractionList)