import React,{ Component } from 'react' 
import { fetchWikiData } from '../../otmFunctions'

import { renderAddress } from './attractionCardGeneralFunctions'

const cardClass = "AttractionListCardLarge animated fadeIn"

class OTMAttractionCardLarge extends Component {
    state = {
        wikidata:''
    }
    // get data back from wikidata listing, then use it to render this card 
    componentDidMount = () => {
        fetchWikiData(this.props.xid,this.setWikidata)
    }

    setWikidata = data =>{
        this.setState({
            wikidata:data
        })
    }
    
    renderCardData = wikidata => {
        if (wikidata !== ''){
            console.log(this.state.wikidata)
            {renderAddress(wikidata.address)}
        }
    }

    render(){
        return( 
        <div 
            className={cardClass}
        >
            {this.renderCardData(this.state.wikidata)}
            {/* <h4 className="name">{attraction.properties.name}</h4>
            <span className="osmRating"> - {attraction.properties.rate}⭐️</span> */}
        </div>
    )}
}

export default OTMAttractionCardLarge