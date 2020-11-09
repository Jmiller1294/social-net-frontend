import React from 'react'
import { Card } from 'react-bootstrap';
import friendpic from '../../assets/blank.png';

const Friend = (props) => {
    const { friend } = props
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={friendpic} />
            <Card.Body>
            <Card.Title>{friend.name}</Card.Title>
            <Card.Text>  
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
export default Friend;