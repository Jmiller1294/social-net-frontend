import React from 'react'
import { Card } from 'react-bootstrap';
import friend1 from '../../assets/friend1.jpg';
import friend2 from '../../assets/friend2.jpg'
import friend3 from '../../assets/friend3.png'

const Friend = (props) => {
    const { friend } = props

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={friend1} />
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