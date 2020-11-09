import React, { Component } from 'react';
import Card  from 'react-bootstrap/Card';
import img1 from '../assets/profile.jpg';

class Profile extends Component {
    
    render() {
        if(this.props.user){
        return (
            <div className="profile-container">
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1}/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.user.name}
                        </Card.Title>
                        <Card.Text>    
                        </Card.Text>
                    </Card.Body>
                </Card>
                <h2>About Me</h2>
                <hr></hr>
                <p>Age: {this.props.user.age}</p>
                <p>Hobbies: {this.props.user.hobbies}</p>
                <p>Hometown: {this.props.user.hometown}</p>
                <p>Occupation: {this.props.user.occupation}</p>
            </div>
        )
        }
        else{
            return (
                <div>
                    Invalid User!
                </div>
            )
        }
    }
}
export default Profile