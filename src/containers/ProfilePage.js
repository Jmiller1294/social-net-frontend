import React, { Component } from 'react';
import Card  from 'react-bootstrap/Card';
import img1 from '../assets/profile.jpg';

class ProfilePage extends Component {
    
    render() {
        if(this.props.user){
        return (
            <div className="container">
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1}/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.user.name}
                        </Card.Title>
                        <Card.Text>    
                        </Card.Text>
                    </Card.Body>
                </Card>
                <h2>About Me</h2>
                <hr></hr>
                <p>Age: {this.props.user.age}</p>
                <p>Hobbies: {this.props.user.hobbies}</p>
                <p>Hometown: {this.props.user.hometown}</p>
                <p>Occupation: {this.props.user.occupation}</p>
            </div>
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
