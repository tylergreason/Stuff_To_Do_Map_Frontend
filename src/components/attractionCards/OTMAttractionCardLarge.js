import React,{ Component } from 'react' 
import { fetchWikiData } from '../../otmFunctions'

const cardClass = "AttractionListCard animated fadeIn"

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
    
    render(){
        return( 
        <div 
            className={cardClass}
        >
            {/* <h4 className="name">{attraction.properties.name}</h4>
            <span className="osmRating"> - {attraction.properties.rate}⭐️</span> */}
        </div>
    )}
}

export default OTMAttractionCardLarge