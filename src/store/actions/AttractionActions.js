export const  fillAttractionForm = (attraction,lat,lng) => {
    let newAddress = {...attraction, lat:lat, lng: lng}
    return {
        type:'FILL_ATTRACTION_FORM', newAddress:newAddress
    }
}

export const addAttraction = (attraction) => {
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
                    console.log(data.error)
                    dispatch({type:'ADD_ATTRACTION_ERRORS', errors:data.error})
                }else{
                    console.log(data)
                    dispatch({type:'ADD_ATTRACTION', myAttractions: data})
                }
            })
    }
}

export const addAttractionErrors = errors => {
    return {
        type:'ADD_ATTRACTION_ERRORS', errors:errors
    }
}

export const resetNewAttractionSuccess = () =>{
    return {
        type:'RESET_NEW_ATTRACTION_SUCCESS'
    }
}


export const getAttraction = (attractionId) => {
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