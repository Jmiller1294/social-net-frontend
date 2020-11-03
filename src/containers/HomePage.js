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
                {this.props.users.name}
                <PostsContainer posts={this.props.users.posts} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      users: state.users.users,
      loading: state.users.loading,
    }
  }


const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps ,mapDispatchToProps)(HomePage);