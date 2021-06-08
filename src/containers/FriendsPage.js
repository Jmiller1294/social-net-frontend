import React, { Component } from 'react';
import Friends from '../components/friends/Friends';
import styled from 'styled-components';

const FriendsContainer = styled.div`
  padding: 25px;
`


class FriendsPage extends Component {
    render() {
        return(
            <FriendsContainer>
                <Friends friends={this.props.friends} />
            </FriendsContainer>
        )
    }
}
export default FriendsPage;
