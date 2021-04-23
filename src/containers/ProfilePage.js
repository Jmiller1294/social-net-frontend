import React, { Component } from 'react';
import { deletePost } from '../actions/deletePost';
import { connect } from 'react-redux';
import styled from 'styled-components';
import img1 from '../assets/profile.jpg';
import AboutMe from '../components/AboutMe';
import Pictures from '../components/Pictures';
import Posts from '../components/posts/Posts';

export const Grid = styled.div`
    padding: 20px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${ (props) => props.size};
  height 100%;
  padding: 10px;
`;

export const ProfilePic = styled.img`
    height: 200px;
    width: 170px;
    border: 1px solid white;
    border-radius: 5px;
`;

export const UserName = styled.h2`

`;


class ProfilePage extends Component {

    state = {
        allPosts: true
    }
    
    
    render() {
        if(this.props.user){
        return (
            <Grid>
                {console.log(this.props)}
                <Row>
                    <Col size={1}>
                        <UserName>{this.props.user.name}</UserName>
                        <ProfilePic src={img1} alt='profile'/>
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <AboutMe user={this.props.user} />
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <Pictures />
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <Posts user={this.props.user} posts={this.props.posts} delete={this.props.deletePost} allPosts={this.state.allPosts}/>
                    </Col>
                </Row>
            </Grid>
        )
        }
        else{
            return (
                <div>
                    Invalid User!
                </div>
            )
        }
    }
}
export default connect(null, { deletePost })(ProfilePage);


