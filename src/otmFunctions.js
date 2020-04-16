// general functions for finding OTM listings. Keeping here to keep MapPage clean. 
const OTMAPIKey = process.env.REACT_APP_OTM_API_KEY

export const fetchWikiData = (wikidataId,thenFunction) => {
    const WikiDataURL = createWikiDataURL(wikidataId)
    fetch(WikiDataURL)
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        thenFunction(data)
    })
}

export const createOTMURL = (latMin,latMax,lngMin,lngMax) => {
    return `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lngMin}&lon_max=${lngMax}&lat_min=${latMin}&lat_max=${latMax}&kinds=historical_places&src_attr=wikidata&apikey=${OTMAPIKey}`
}
export const createWikiDataURL = (xid)=>{
    return `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${OTMAPIKey}`
}

// export const fetchOTMData = (attractionBounds, thenFunction) => {
//     const latMin = attractionBounds.south;  
//     const latMax = attractionBounds.north; 
//     const lngMin = attractionBounds.west;
//     const lngMax = attractionBounds.east;
//     const OTMURL = createOTMURL(latMin,latMax,lngMin,lngMax)
//     let returnData = fetch(OTMURL)
//     .then(resp => resp.json())
//     .then(data => {
//         thenFunction(data.features)
//     }).catch((error)=>{
//         console.log(error)
//     })
//     return returnData
// }

// export const fetchOTMData = (attractionBounds, thenFunction) => {
//     const latMin = attractionBounds.south;  
//     const latMax = attractionBounds.north; 
//     const lngMin = attractionBounds.west;
//     const lngMax = attractionBounds.east;
//     const OTMURL = createOTMURL(latMin,latMax,lngMin,lngMax)
//     let returnData = fetch(OTMURL)
//     .then(resp => resp.json())
//     .then(data => {
//         thenFunction(data.features)
//     }).catch((error)=>{
//         console.log(error)
//     })
//     return returnData
// }

export const fetchOTMData = (attractionBounds, thenFunction) => {
    fetch(`http://localhost:3000/otm_attractions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
            'south': attractionBounds.south,
            'north': attractionBounds.north,
            'east': attractionBounds.east, 
            'west': attractionBounds.west
        }, 
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
        thenFunction(data.features)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
    