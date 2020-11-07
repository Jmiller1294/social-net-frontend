import React, { Component } from 'react';
import { addPost } from  '../../actions/addPost';
import { connect } from 'react-redux'

class PostInput extends Component {
   
    state = {
        content: '',
        date: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPost(this.state, this.props.user.id)
        this.setState({
            content: '',
            date: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div>
                <h2>Welcome, {this.props.user.name}</h2>
                {this.state.content}
                <form className="postbox" onSubmit={event => this.handleSubmit(event)}>
                    <textarea onChange={event => this.handleChange(event)} name="content" value={this.state.content} placeholder="Whats on your mind?"/>
                    <br></br>
                    <input  type="submit" value="Post" />
                </form>
            </div>
        )
    }
}
export default connect(null, { addPost})(PostInput);