export const  fillAttractionForm = (attraction,lat,lng) => {
    let newAddress = {...attraction, lat:lat, lng: lng}
    return {
        type:'FILL_ATTRACTION_FORM', newAddress:newAddress
    }
}