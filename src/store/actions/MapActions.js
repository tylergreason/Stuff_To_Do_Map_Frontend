export const getAttractions = (bounds) => {
    return (dispatch) => {
        fetch('http://localhost:3000/attractions', {
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
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:'GET_ATTRACTIONS', attractions: data})
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
}


export const getMyAttractions = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/myAttractions', {
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
        fetch(`http://localhost:3000/attractions/${id}`, {
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

export const updateAttraction = (attraction) => {
    console.log(attraction)
    return (dispatch) => {
        fetch(`http://localhost:3000/attractions/${attraction.id}`, {
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
                dispatch({type:'UPDATE_ATTRACTION', myAttractions: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const updateAttraction = (attraction) => {
    console.log(attraction)
    return (dispatch) => {
        fetch(`http://localhost:3000/attractions/${attraction.id}`, {
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
                dispatch({type:'UPDATE_ATTRACTION', myAttractions: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

