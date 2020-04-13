import React from 'react' 

export const ServerResponseCard = props => {
    if (props.response.length > 0){
        return (
        <ul className="serverResponseList">
                {props.response.map(response => {
                    return <li className="serverResponseItem">{response}</li> 
                })}
        </ul>
        )
    }else{
        return(<></>)
    }
}