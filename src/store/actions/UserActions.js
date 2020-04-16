// const API_URL = 'https://stdm-backend.herokuapp.com/'
const API_URL = 'http://localhost:3000'
export const getUser = () => {
    console.log('get user called ')
    return (dispatch) => {
        fetch(`${API_URL}/myAccount`, {
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

export const updateUser = (user,returnMessage) => {
    return (dispatch) => {
        fetch(`${API_URL}/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }, 
            body: JSON.stringify({user: user})
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error){
                    returnMessage(data)
                }else{
                    dispatch({type:'UPDATE_USER', user:data.user})
                    returnMessage(data)
                }
                // dispatch({type:'UPDATE_USER', user: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const updatePassword = (user, returnMessage) => {
    const userInfo = {
        id:user.id, 
        current_password:user.password, 
        password:user.new_password, 
        password_confirmation: user.password_confirmation
    }
    return (dispatch) => {
        fetch(`${API_URL}/updatePassword/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }, 
            body: JSON.stringify({user:userInfo})
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error){
                    returnMessage(data)
                }else{
                    dispatch({type:'UPDATE_PASSWORD'})
                    returnMessage(data)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}


export const updateEmail = (email, returnMessage) => {
    return (dispatch) => {
        fetch(`${API_URL}/updateEmail/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }, 
            body: JSON.stringify({user:email})
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error){
                    returnMessage(data)
                }else{
                    returnMessage(data)
                    dispatch({type:'UPDATE_EMAIL', email:data.email})
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const deleteUser = (user,returnMessage) => {
    console.log({user})
    return (dispatch) => {
        fetch(`${API_URL}/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            },
            body: JSON.stringify({user})
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error){
                    returnMessage(data)
                }else{
                    dispatch({type:'DELETE_USER', user: data})
                    returnMessage(data)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}