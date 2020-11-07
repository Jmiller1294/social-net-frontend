import React, { Component } from 'react';
import Friends from '../components/friends/Friends'

class FriendsContainer extends Component {
    render() {
        return(
            <div>
                <Friends friends={this.props.user.friends} />
            </div>
        )
    }
}
export default FriendsContainer;
