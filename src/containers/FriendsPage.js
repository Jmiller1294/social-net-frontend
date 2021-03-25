import React, { Component } from 'react';
import Friends from '../components/friends/Friends';

class FriendsPage extends Component {
    render() {
        return(
            <div className="container">
                <Friends friends={this.props.friends} />
            </div>
        )
    }
}
export default FriendsPage;
