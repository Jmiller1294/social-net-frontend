import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Profile extends Component {
    
    render() {
        if(this.props.user){
        return (
            <div className="profile-container">
                <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src=''/>
                <Card.Body>
                <Card.Title>{this.props.user.name}</Card.Title>
                <Card.Text>
                    Age: {this.props.user.age}
                </Card.Text>
                </Card.Body>
                </Card>
                <p>Hobbies: {this.props.user.hobbies}</p>
                <p>Hometown: {this.props.user.hometown}</p>
                <p>Occupation: {this.props.user.occupation}</p>
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