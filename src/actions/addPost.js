export function addPost(data, userId) {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_POST', payload: post}))
    }
}
