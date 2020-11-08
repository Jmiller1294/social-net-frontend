export function deletePost(id) {
    return (dispatch) => {
    fetch(`http://localhost:3000/users/1/posts${id}`, {
        method: 'DELETE'
    })
    .then(id => dispatch({ type: 'DELETE', payload: id}))
    }
}