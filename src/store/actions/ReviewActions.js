// this isn't actually an action, but I didn't know where else to put it so here it is 
export const addReview = (review, returnMessage) => {
    fetch(`http://localhost:3000/reviews/`, {
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
                returnMessage(data.error)
            }else{
                returnMessage(data.success)
            }
        })
}