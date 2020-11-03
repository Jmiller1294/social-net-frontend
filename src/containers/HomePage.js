import React, { Component } from 'react';
import PostsContainer from './PostsContainer';

import { connect } from 'react-redux' 
import { fetchUsers } from '../actions/userActions'

class HomePage extends Component {

    
   
   
    componentDidMount() {
        this.props.fetchUsers()
    }

    getPosts() {
    
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => <li key={user.id}>{user.name}</li>)}
                <PostsContainer users={this.props.users} />
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
      users: state.users.users,
      loading: state.users.loading,
    }
  }


const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps ,mapDispatchToProps)(HomePage);