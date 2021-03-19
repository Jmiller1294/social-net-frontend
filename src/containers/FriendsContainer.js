import React, { Component } from 'react';
import Friends from '../components/friends/Friends';

class FriendsContainer extends Component {
    render() {
        return(
            <div className="container">
                <Friends friends={this.props.friends} />
            </div>
        )
    }
}
export default FriendsContainer;
