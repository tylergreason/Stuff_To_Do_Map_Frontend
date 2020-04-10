import React from 'react'; 
import { Redirect } from 'react-router-dom'

const handleReturn = (props) => {
    // check if user is logged in 
    if(localStorage.getItem('auth_token')){
        // return <props.component /> 
        return props.render()
    }else{
        // redirect to map page if they are not logged in 
        return <Redirect to='/' />
    }
}

const CheckLogin =(props) => {
    return (
        <>
        { handleReturn(props) }
        </>
    )
}

export default CheckLogin;