export const getAttractions = (bounds) => {
    return (dispatch) => {
        console.log(bounds)
        const data = {bounds}
        fetch('http://localhost:3000/attractions?testpar=23', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'bounds':bounds
            }, 
            // body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch({type:'GET_ATTRACTIONS', attractions: data})
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
}
