import React from 'react'

export const renderAddress = (attraction) => {
        // debugger
        let returnHouseNumber = '';
        let returnRoad = '';
        let returnCity = '';
        let returnState = '';
        let returnCountry = '';
        
        if (attraction.house_number !== null) {
            returnHouseNumber = attraction.house_number; 
        }
        if (attraction.road !== null) {
            returnRoad = attraction.road + ', '; 
        }
        if (attraction.city !== null) {
            returnCity = attraction.city + ', '; 
        }
        if (attraction.state !== null) {
            returnState = attraction.state + ', '; 
        }
        if (attraction.country !== null) {
            returnCountry = attraction.country; 
        }
        return  (<span className='address'>
               {returnHouseNumber} {returnRoad} {returnCity} {returnState} {returnCountry}
            </span>
        )
}