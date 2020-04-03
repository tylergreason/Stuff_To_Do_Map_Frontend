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
