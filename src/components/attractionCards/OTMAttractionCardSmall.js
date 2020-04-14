import React from 'react' 
const cardClass = "AttractionListCard animated fadeIn"


export const OTMAttractionCardSmall = props => {
    return( 
        <div 
            // wikidata={attraction.properties.wikidata}
            className={cardClass}
            key={props.attraction.id}
            id={props.attraction.id}
            // git attraction list access to the wikidata id it needs to look up info 
            onClick={()=>props.onClick(props.attraction.properties.wikidata, props.attraction.properties.name)}
        >
            <h4 className="name">{props.attraction.properties.name}</h4>
            <span className="osmRating"> - {props.attraction.properties.rate}⭐️</span>
        </div>
    )
}
