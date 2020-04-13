// export const login = (user) => {
//     return {
//         type:'LOGIN',
//         user:user
//     }
// }

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const signUp = (newUser, returnMessage) => {
    return dispatch => {
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: newUser})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        if (data.error){
            returnMessage(data)
        }else if (data.token){
                localStorage.setItem('auth_token',data.token)
                returnMessage(data)
                dispatch({type:'LOGIN', user:data.user})
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
}


export const login = (user, returnMessage) => {
    return dispatch => {
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: user})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        if (data.error){
            returnMessage(data)
        }else if (data.token){
                localStorage.setItem('auth_token',data.token)
                returnMessage(data)
                dispatch({type:'LOGIN', user:data.user})
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
}