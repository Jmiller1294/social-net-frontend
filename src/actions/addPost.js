export function addPost(data) {
     
    return (dispatch) => {
        fetch('http://localhost:3000/users/1/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}
