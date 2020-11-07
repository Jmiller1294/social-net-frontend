export function fetchUser() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' })
        fetch(`http://localhost:3000/users/1`)
        .then(response =>  response.json())
        .then(data => dispatch({ type: 'ADD_USERS', users: data}))
    }
}