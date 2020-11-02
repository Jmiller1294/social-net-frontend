import React, { Component } from 'react';
import { connect } from 'react-redux' 
import { fetchUsers } from '../actions/userActions'

class User extends Component {
    
    state = {
        name: ''
    }

    componentDidMount() {
        this.props.fetchUsers
    }


    render() {
        return (
            <div>
                User Page
                {this.props.name}
            </div>
        )
    }
}

mapStateToProps = state => {
    return {
        name: state.name
    }
}



const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps,mapDispatchToProps)(User);