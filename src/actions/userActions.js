export function fetchUsers() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' })
        fetch('http://localhost:3000/users/1')
        .then(response =>  response.json())
        .then(data => console.log(data))
    }
}