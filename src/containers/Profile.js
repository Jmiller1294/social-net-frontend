import React, { Component } from 'react'
import FriendsContainer from './FriendsContainer'

class Profile extends Component {
    
    render() {
        if(this.props.user){
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.age}</p>
                <p>{this.props.user.hobbies}</p>
                <p>{this.props.user.hometown}</p>
                <p>{this.props.user.occupation}</p>
                <FriendsContainer user={this.props.user}/>
            </div>
        )
        }
        else{
            return (
                <div>
                    hello
                </div>
            )
        }
    }
}
export default Profile