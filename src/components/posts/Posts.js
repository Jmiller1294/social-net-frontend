import React, { Component } from 'react';
import Post from './Post';
import styled from 'styled-components';

export const PostsContainer = styled.div`
    padding: 0;
`
export const PostsList = styled.ul`
    padding: 0;
    list-style: none;
`





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
            let filteredPosts = this.props.posts.filter(post => post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
            filteredPosts.sort(function(a,b) {return a.id > b.id ? -1 : b.id > a.id ? 1 : 0})
            return (
                <PostsContainer>
                    <PostsList>
                        <h3>Recent Posts</h3>
                        {filteredPosts && filteredPosts.slice(0,4).map(post => 
                        <Post key={post.id} user={this.props.user} 
                        post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
                    </PostsList>
                </PostsContainer>
            )
        }
}
export default Posts;

