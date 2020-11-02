import React, { Component } from 'react';
import { connect } from 'react-redux' 

class User extends Component {
    
    state = {
        name: ''
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
    fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps,mapDispathToProps)(User);