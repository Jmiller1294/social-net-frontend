import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    const { friends } = props

    return (
        <div>
        <h2>Friends List</h2>
        <ul className="friend-list">
            {friends && friends.map((friend, index) => <Friend key={index} friend={friend}/>)}
        </ul>
        </div>
    )
}

export default Friends