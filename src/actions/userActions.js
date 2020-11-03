export function fetchUsers() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' })
        fetch('http://localhost:3000/users')
        .then(response =>  response.json())
        .then(data => dispatch({ type: 'ADD_USERS', users: data}))
    }
}