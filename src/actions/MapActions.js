export const getAttractions = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/attractions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
