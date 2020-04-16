import React from 'react' 
import { connect } from 'react-redux'
const cardClass = "AttractionListCard animated fadeIn otmAttractionCard"


const OTMAttractionCardSmall = props => {
    return( 
        <div 
            // wikidata={attraction.properties.wikidata}
            className={cardClass}
            key={props.attraction.id}
            id={`otmAttractionCardSmall${props.attraction.properties.xid}`}
            // git attraction list access to the wikidata id it needs to look up info 
            onClick={()=>props.onClick(props.attraction.properties.xid)}
        >
            <h4 className="name">{props.attraction.properties.name}</h4>
            <span className="osmRating"> - {props.attraction.properties.rate}⭐️</span>
        </div>
    )
}
export default connect(null, { })(OTMAttractionCardSmall)