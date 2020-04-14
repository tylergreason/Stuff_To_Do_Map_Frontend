import React,{ Component } from 'react' 
import { fetchWikiData } from '../../otmFunctions'

import { renderAddress } from './attractionCardGeneralFunctions'
import AttractionListCardLarge from './AttractionListCardLarge'

const cardClass = "AttractionListCardLarge"

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

    renderWikipediaData = data =>{
        const description = document.createElement('div'); 
        description.innerHTML = data.html; 
        return description
    }

    renderCardData = wikidata => {
        if (wikidata !== ''){
            console.log(this.state.wikidata)
            {return (
                <div className={'otmAttractionCard'}>
                    <h4 className="name">{this.state.wikidata.name}</h4>
                    {renderAddress(wikidata.address)}
                    <img className="otmImage" src={wikidata.preview.source}></img>
                    <p>{wikidata.wikipedia_extracts.text}</p>

                    {/* {wikidata.properties.name} */}
                </div>
                )
            }
        }
    }

    render(){
        return( 
        <>
            {this.renderCardData(this.state.wikidata)}
            {/* <h4 className="name">{attraction.properties.name}</h4>
            <span className="osmRating"> - {attraction.properties.rate}⭐️</span> */}
        </>
    )}
}

export default OTMAttractionCardLarge