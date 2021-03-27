import React, { Component } from 'react';
import { addPost } from  '../../actions/addPost';
import { connect } from 'react-redux';
import styled from 'styled-components'

export const PostInputContainer = styled.div`

`
export const PostForm = styled.form`
    position: relative;
    padding: 10px;
    margin: 10px auto 10px auto;
    width: 100%;
    background-color: rgb(245,245,245);
    border-radius: 5px;
`

export const PostArea = styled.textarea`
    height: 100px;
    width: 100%;
    resize: none;
`

export const PostButton = styled.button`
    letter-spacing: 1px;
    width: 100px;
    color: #fff;
    background-color:#007bff;
    border-radius: 5px;
`



class PostInput extends Component {
   
    state = {
        content: '',
        date: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.content !== '') {
            this.props.addPost(this.state, this.props.user.id)
            this.setState({
                content: '',
                date: ''
            })
        }
        else {
            alert('Please write a post')
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <PostInputContainer>
                <PostForm className="postbox" onSubmit={event => this.handleSubmit(event)}>
                    <PostArea onChange={event => this.handleChange(event)} name="content" value={this.state.content} placeholder="Whats on your mind?"/>
                    <br></br>
                    <PostButton as="input" type="submit" value="Post" />{' '}
                </PostForm>
            </PostInputContainer>
        )
    }
}
export default connect(null, { addPost})(PostInput);

