export default function UserReducer(state = { users: [], loading: false }, action) { 
    switch(action.type) {
        case 'LOADING_USERS': 
          return {
            ...state,
            users: [...state.users],
            loading: true
        }
        case 'ADD_USERS':
            return {
                ...state,
            users: action.users,
            loading: false
            }
        case 'ADD_POST': 
            return {
                ...state,
                users: {
                    ...state.users,
                    posts: state.users.posts.concat(action.payload)
                }  
            }
        case 'DELETE_POST':
            const posts = state.users.posts.filter(post => post.id !== action.payload)
            return {
                ...state,
                users: {
                    ...state.users,
                    posts: posts
                }
            }
        default:
            return state;
    }
    
}

