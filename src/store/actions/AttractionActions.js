export const  fillAttractionForm = (attraction,lat,lng) => {
    let newAddress = {...attraction, lat:lat, lng: lng}
    return {
        type:'FILL_ATTRACTION_FORM', newAddress:newAddress
    }
}

export const addAttraction = (attraction) => {
    console.log(attraction)
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
                dispatch({type:'ADD_ATTRACTION', myAttractions: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}