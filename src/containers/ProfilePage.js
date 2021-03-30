import React, { Component } from 'react';
import styled from 'styled-components';
import img1 from '../assets/profile.jpg';

export const Grid = styled.div`

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
    height: 240px;
    width: 200px;
`

class ProfilePage extends Component {
    
    
    render() {
        if(this.props.user){
        return (
            <Grid>
                <Row>
                    <Col size={1}>
                        <ProfilePic src={img1} alt='profile'/>
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <h2>About Me</h2>
                        <hr></hr>
                        <p>Age: {this.props.user.age}</p>
                        <p>Hobbies: {this.props.user.hobbies}</p>
                        <p>Hometown: {this.props.user.hometown}</p>
                        <p>Occupation: {this.props.user.occupation}</p>
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <h2>About Me</h2>
                        <hr></hr>
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
export default ProfilePage;


// render() { 
//     if(this.state.pinnedOnly === true){
//         let pinnedPosts = this.state.pinnedPosts.filter(post => post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
//         return(
//             <PostsContainer>
//                 <PostsList> 
//                     <h3>Recent Posts</h3>
//                     <form>
//                         <input type="checkbox" id="myCheck" onChange={() => this.handlePinChange()} ></input>
//                         <input type="text" onChange={event => this.handleChange(event)} name="text" value={this.state.searchTerm}/>
//                     </form>
//                 {pinnedPosts.map(post => 
//                 <Post key={post.id} user={this.props.user} 
//                 post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
//                 </PostsList> 
//             </PostsContainer>
//         )
//     }
//     else {
//         let filteredPosts = this.props.posts.filter(post => post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
//         filteredPosts.sort(function(a,b) {return a.id > b.id ? -1 : b.id > a.id ? 1 : 0})
//         return (
//             <PostsContainer>
//                 <PostsList>
//                     <h3>Recent Posts</h3>
//                     <form>
//                         <input type="checkbox" id="myCheck" onChange={() => this.handlePinChange()} ></input>
//                         <input type="text" onChange={event => this.handleChange(event)} name="text" value={this.state.searchTerm}/>
//                     </form>
//                 {filteredPosts && filteredPosts.slice(0,4).map(post => 
//                 <Post key={post.id} user={this.props.user} 
//                 post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
//                 </PostsList>
//             </PostsContainer>
//         )
//     }

// }
// }
