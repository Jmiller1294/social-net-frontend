export default function RootReducer(state = { users: [], posts: [], friends: [], loading: false }, action) { 
    switch(action.type) {
        case 'LOADING_USERS': 
          return {
            ...state,
            users: [...state.users],
            loading: true
        }
        case 'ADD_USERS': 
            console.log(action.users)
            return {
                ...state,
            users: action.users,
            posts: action.users.posts,
            friends: action.users.friends,
            loading: false,
            }
        case 'ADD_POST': 
            console.log(action)
            return {
                ...state,
                posts: state.posts.concat(action.payload)
                }  
        case 'DELETE_POST':
            const posts = state.posts.filter(post => post.id !== action.payload)
            return {
                ...state,
                posts: posts
                }
        default:
            return state;
    }
    
}

