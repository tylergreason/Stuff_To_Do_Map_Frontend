import React from 'react'
import styled from 'styled-components'

const ServerWarning = () => {
    // create warning div using styled component 
    const WarningDiv = styled.div`
    position: fixed;
    top: 50%; 
    left: 50%;
    background-color: green;    
    transform: translate(-50%, -50%); 
    max-width: 500px;
    padding: 10px; 
    border-radius: 10px; 
    `
    
    return(
        <div>
        <WarningDiv class='show'>
            ✌️ Hey there! It looks like no attractions are available to view right now. You may need to wait around 10 seconds for the database to wake up (this app uses free Heroku servers) or zoom into the map farther to see the attractions!
        </WarningDiv>
        </div>
    )
}

export default ServerWarning