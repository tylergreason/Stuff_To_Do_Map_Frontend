export const  fillAttractionForm = (attraction,lat,lng) => {
    let newAddress = {...attraction, lat:lat, lng: lng}
    return {
        type:'FILL_ATTRACTION_FORM', newAddress:newAddress
    }
}

export const addAttraction = (attraction,returnMessage) => {
    console.log('addAttraction fired ')
    return (dispatch) => {
        fetch(`http://localhost:3000/attractions/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            },
            body: JSON.stringify(attraction),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error){
                    returnMessage(data)
                }else{
                    // because of the way I'm rendering data on the backend and the way I want to handle the success of a new attraction, I'm hardcoding the object with a success key here so the component submitting the new attraction will know to go to the previous screen.
                    returnMessage({success:"Success"})
                    dispatch({type:'ADD_ATTRACTION', myAttractions: data})
                }
            })
    }
}

export const getAttraction = (attractionId) => {
    console.log(attractionId)
    return (dispatch) => {
        fetch(`http://localhost:3000/attractions/${attractionId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            dispatch({type:'GET_ATTRACTION', attraction: data})
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}