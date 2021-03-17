import React, { Component } from 'react';
import { addPost } from  '../../actions/addPost';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'

class PostInput extends Component {
   
    state = {
        content: '',
        date: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
       
        console.log(event.target)
        if(this.state.content !== '') {
            console.log('a')
            this.props.addPost(this.state, this.props.user.id)
            console.log('g')
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
            <div className="post-input-container">
                <h2 className="welcome">Hello, {this.props.user.name}</h2>
                <form className="postbox" onSubmit={event => this.handleSubmit(event)}>
                    <textarea onChange={event => this.handleChange(event)} name="content" value={this.state.content} placeholder="Whats on your mind?"/>
                    <br></br>
                    <Button as="input" type="submit" value="Post" />{' '}
                </form>
            </div>
        )
    }
}
export default connect(null, { addPost})(PostInput);

