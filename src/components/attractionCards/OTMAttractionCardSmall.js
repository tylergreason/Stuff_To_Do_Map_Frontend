import React from 'react' 
const cardClass = "AttractionListCard animated fadeIn"


export const OTMAttractionCardSmall = attraction => {
    return( 
        <div 
            // wikidata={attraction.properties.wikidata}
            className={cardClass}
        >
            <h4 className="name">{attraction.properties.name}</h4>
            <span className="osmRating"> - {attraction.properties.rate}⭐️</span>
        </div>
    )
}
