import React,{ Component } from 'react' 
import { fetchWikiData } from '../../otmFunctions'

import { renderAddress } from './attractionCardGeneralFunctions'


const cardClass = "AttractionListCardLarge"

class OTMAttractionCardLarge extends Component {
    state = {
        wikidata:'',
        scrollIntoView:false
    }
    // get data back from wikidata listing, then use it to render this card 
    componentDidMount = () => {
        fetchWikiData(this.props.xid,this.setWikidata)
        console.log(this.props)
    }
    
    componentDidUpdate = () => {
        if (this.state.scrollIntoView === false){
            console.log(this.state.scrollIntoView)
            const thisCard = document.getElementById(`otmAttractionCardLarge${this.props.xid}`)
            thisCard.scrollIntoView()
            this.setState({
                scrollIntoView:true
            })
        }        
    }


    setWikidata = data =>{
        this.setState({
            wikidata:data
        })
    }

    renderWikipediaData = data =>{
        // debugger
        if (data.text){
            return(
                <p>
                    {data.text}
                </p>
            )
        }
    }

    renderImage = data => {
        if (data.preview){
            return (
                <img className="otmImage" src={data.preview.source}></img>
            )
        } else {
            return (
                <p>No Image Available</p>
            )
        }
    }

    renderCardData = wikidata => {
        if (wikidata !== ''){
            console.log(this.state.wikidata)
            const divToRender = 
                <div 
                className={'otmAttractionCard'}
                id={`otmAttractionCardLarge${this.state.wikidata.xid}`}
                >
                <h4 className="name">{this.state.wikidata.name}</h4>
                {renderAddress(wikidata.address)}
                {this.renderImage(wikidata)}
                {this.renderWikipediaData(wikidata.wikipedia_extracts)}
                {/* <p>{wikidata.wikipedia_extracts.text}</p> */}
                
                {/* {wikidata.properties.name} */}
                </div>
            return (
                divToRender
            )
            
        }
    }

    render(){
        
        return( 
            <>  
            {this.renderCardData(this.state.wikidata)}
        </>
    )}
}

export default OTMAttractionCardLarge