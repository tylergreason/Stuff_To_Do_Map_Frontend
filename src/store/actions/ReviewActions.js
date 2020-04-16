const API_URL = 'https://stdm-backend.herokuapp.com/'
// const API_URL = 'http://localhost:3000'

export const addReview = (review, returnMessage) => {
    return (dispatch) => {
        fetch(`${API_URL}/reviews/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            },
            body: JSON.stringify(review),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.error){
                returnMessage(data)
            }else{
                returnMessage(data)
                dispatch({type:'ADD_REVIEW', attraction:data.attraction})
            }
        })
    }
}

export const deleteReview = (review) => {
    // debugger
    return (dispatch) => {
        fetch(`${API_URL}/reviews/${review.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            },
            body: JSON.stringify(review)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.error){
            }else{
                dispatch({type:'DELETE_REVIEW', attraction:data.attraction})
            }
        })
    }
}

