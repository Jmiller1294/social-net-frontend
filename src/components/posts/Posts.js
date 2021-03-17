import React, { Component } from 'react';
import Post from './Post';


class Posts extends Component {
    
    state = {
        searchTerm: '',
        pinnedPosts: [],
        pinnedOnly: false
    }


    handleChange = (event) => { 
        this.setState({
            searchTerm: event.target.value
        })
    }

    handlePinChange = () => {
        this.setState({
            pinnedOnly: !this.state.pinnedOnly
        })
    }


    handlePin = (post) => {
        if(this.state.pinnedPosts.find(x => x.id === post.id)) {
            console.log('found')
        }
        else {
            this.setState({
                pinnedPosts: [...this.state.pinnedPosts, post]
            })
        }
    }

    render() { 
        if(this.state.pinnedOnly === true){
            let pinnedPosts = this.state.pinnedPosts.filter(post => post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
            return(
                <div className="posts-container">
                    <ul className="postlist">   
                        <h2>Posts</h2>
                    <hr></hr>
                        <label>Search</label>
                        <form>
                            <input type="checkbox" id="myCheck" onChange={() => this.handlePinChange()} ></input>
                            <input type="text" onChange={event => this.handleChange(event)} name="text" value={this.state.searchTerm}/>
                        </form>
                    {pinnedPosts.map(post => 
                    <Post key={post.id} user={this.props.user} 
                    post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
                </ul>
            </div>
            )
        }
        else {
            let filteredPosts = this.props.posts.filter(post => post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
            filteredPosts.sort(function(a,b) {return a.id > b.id ? -1 : b.id > a.id ? 1 : 0})
            return (
                <div className="posts-container">
                    <ul className="postlist">   
                        <h2>Posts</h2>
                    <hr></hr>
                        <label>Search</label>
                        <form>
                            <input type="checkbox" id="myCheck" onChange={() => this.handlePinChange()} ></input>
                            <input type="text" onChange={event => this.handleChange(event)} name="text" value={this.state.searchTerm}/>
                        </form>
                    {filteredPosts && filteredPosts.map(post => 
                    <Post key={post.id} user={this.props.user} 
                    post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
                    </ul>
                </div>
            )
        }
    
    }
}
export default Posts;

