export default function UserReducer(state = { users: [], loading: false }, action) { 
    switch(action.type) {
        case 'LOADING_USERS': 
          return {
            ...state,
            users: [...state.users],
            loading: true
        }
        case 'ADD_USERS':
            console.log(state)
            console.log(action)
            
            return {
                ...state,
            users: action.users,
            loading: false
            }
        case 'ADD_POST':
            console.log(state.users)
            console.log(state.users.posts)
            console.log(action)
            return {
                ...state,
                users: {
                    ...state.users,
                    posts: state.users.posts.concat(action.payload)
                }  
            }
    
            
        default:
            return state;
    }
    
}

