import React from 'react';
import PostsContainer from './PostsContainer';


const HomePage = (props) => {

    const { user } = props

    return (
        <div>
            {user.name}
            <PostsContainer posts={user.posts} />
        </div>
    )
}
export default HomePage;