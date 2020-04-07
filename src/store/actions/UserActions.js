export const getUser = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/myAccount`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch({type:'GET_USER', user: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const updateUser = (user) => {
    return (dispatch) => {

        // fetch(`http://localhost:3000/attractions/${attraction.id}`, {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }, 
            body: JSON.stringify(user)
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:'UPDATE_USER'})
                // dispatch({type:'UPDATE_USER', user: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

