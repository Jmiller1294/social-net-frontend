import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput';
import Posts from '../components/posts/Posts';
import NewsContainer from './ArticlesContainer';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { deletePost } from '../actions/deletePost';

class UserContainer extends Component {

    getNews() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ed7a9fd498774d808aeea40c3b299040'
        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    componentDidMount() {
        this.getNews()
    }
    
    render() {
        //const user = this.props.users[this.props.match.params.id - 1]
        return (
            <div className="container">
                <PostInput user={this.props.user} posts={this.props.posts}/>
                <Posts user={this.props.user} posts={this.props.posts} delete={this.props.deletePost}/>
                <NewsContainer/>
            </div>
        )
    }
}
export default connect(null, { deletePost })(UserContainer);