import React, { Component } from 'react';
import Friends from '../components/friends/Friends';



class FriendsPage extends Component {
    render() {
        return(
            <>
                <Friends friends={this.props.friends} />
            </>
        )
    }
}
export default FriendsPage;
