import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions/addPost'

class PostInput extends Component {
   
    state = {
        content: '',
        date: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPost(this.state)
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
                Posts:
                {this.state.content}
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Write A Post</label>
                    <textarea onChange={event => this.handleChange(event)} name="content" value={this.state.content} />
                    <input type="submit" value="Post" />
                </form>
            </div>
        )
    }
}
export default connect(null, { addPost })(PostInput);