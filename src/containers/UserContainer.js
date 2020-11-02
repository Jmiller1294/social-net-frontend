import React, { Component } from 'react';
import { connect } from 'react-redux' 
import { fetchUsers } from '../actions/userActions'

class UserContainer extends Component {

   
    componentDidMount() {
        this.props.fetchUsers()
    }


    render() {
        return (
            <div>
                {this.props.loading}
                {this.props.users.map(user => <li key={user.id}>{user.name}</li>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    console.log(state.users.users)
    console.log(state.users.users)

    return {
      users: state.users.users,
      loading: state.users.loading
    }
  }


const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps ,mapDispatchToProps)(UserContainer);