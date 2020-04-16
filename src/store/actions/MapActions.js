const API_URL = 'https://stdm-backend.herokuapp.com'
// const API_URL = 'http://localhost:3000'


export const getAttractions = (bounds) => {
    return (dispatch) => {
        fetch(`${API_URL}/attractions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'south': bounds.south,
                'north': bounds.north,
                'east': bounds.east, 
                'west': bounds.west
            }, 
            // body: JSON.stringify(data)
            })
            .then((response) => {
                console.log(response.status);
                console.log(response.body);
                return response.json();
             })
            .then((data) => {
                console.log(data)
                dispatch({type:'GET_ATTRACTIONS', attractions: data})
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
}


export const getMyAttractions = () => {
    return (dispatch) => {
        fetch(`${API_URL}/myAttractions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }, 
            // body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)  
                dispatch({type:'GET_MY_ATTRACTIONS', myAttractions: data})
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
}

export const deleteAttraction = (id) => {
    return (dispatch) => {
        fetch(`${API_URL}/attractions/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch({type:'DELETE_ATTRACTION', myAttractions: data})
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
}

export const updateAttraction = (attraction,returnMessage) => {
    return (dispatch) => {
        fetch(`${API_URL}/attractions/${attraction.id}`, {
            method: 'PATCH',
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
                    dispatch({type:'UPDATE_ATTRACTION', myAttractions: data})
                    returnMessage('Success')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const highlightAttraction = attractionId => {
    return (dispatch) => {
        dispatch({type:'HIGHLIGHT_ATTRACTION', attractionId:attractionId})
    }
}

