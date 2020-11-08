import '../App.css';
import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'
import NewsContainer from './NewsContainer'
import { Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/Layout';

class UserContainer extends Component {
    
    
    render() {
        return (
        <div>
            <Layout>
            <div>
                <PostInput user={this.props.user} posts={this.props.posts}/>
                <Posts user={this.props.user} posts={this.props.posts}/>
            </div>
            <div>
                <NewsContainer/>
            </div>
            </Layout>
        </div>
        )
    }

}
export default UserContainer;