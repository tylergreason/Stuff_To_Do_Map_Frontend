import React from 'react'

export const renderAddress = (attraction) => {
        // debugger
        let returnHouseNumber = '';
        let returnRoad = '';
        let returnCity = '';
        let returnState = '';
        let returnCountry = '';
        
        if (attraction.house_number !== undefined) {
            returnHouseNumber = attraction.house_number; 
        }
        if (attraction.road) {
            returnRoad = attraction.road + ', '; 
        }
        if (attraction.city) {
            returnCity = attraction.city + ', '; 
        }
        if (attraction.state) {
            returnState = attraction.state + ', '; 
        }
        if (attraction.country) {
            returnCountry = attraction.country; 
        }
        return  (<div className='address'>
            {returnHouseNumber} {returnRoad} {returnCity} {returnState} {returnCountry}
            </div>
        )
}

export const renderRating = attraction => {
    if (attraction.average_rating){
        return(
            <span className='rating'> - {attraction.average_rating}⭐️</span>
        )
    }else{
        return(
            <span className='rating'> - No Reviews Yet</span>
        )
    }
}