import React, { Component } from 'react';
import Post from './Post';
import styled from 'styled-components';

export const RecentPostsContainer = styled.div`
    padding: 0;
    position: fixed;
    width: 23%;
`
export const AllPostsContainer = styled.div`
    padding: 0;
    width: 100%;
`

export const PostsList = styled.ul`
    padding: 0;
    list-style: none;
`

export const Header = styled.h3`
    text-align: center;
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

    componentDidMount() {
        console.log("mounted")
    }

    render() { 
            let filteredPosts = this.props.posts.filter(post => post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
            filteredPosts.sort(function(a,b) {return a.id > b.id ? -1 : b.id > a.id ? 1 : 0})
            
            if(this.props.allPosts === true) {
                return(
                        <AllPostsContainer>
                        {console.log(filteredPosts)}
                        <Header>Recent Posts</Header>
                        <PostsList>
                            {filteredPosts && filteredPosts.map(post => 
                            <Post key={post.id} user={this.props.user} 
                            post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
                        </PostsList>
                        </AllPostsContainer>
                )
            }
            else {
                return (
                    <RecentPostsContainer>
                        {console.log(filteredPosts)}
                        <Header>Recent Posts</Header>
                        <PostsList>
                            {filteredPosts && filteredPosts.slice(0,4).map(post => 
                            <Post key={post.id} user={this.props.user} 
                            post={post} delete={this.props.delete} pinned={post => this.handlePin(post)}/>)}
                        </PostsList>
                    </RecentPostsContainer>
                )
            }
           
        }
}
export default Posts;

