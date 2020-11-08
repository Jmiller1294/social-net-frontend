import React from 'react';
import Friend from './Friend'


const Friends = (props) => {
    const { friends } = props

    return (
        <div>
        <h2>Friends List({friends && friends.length})</h2>
        <hr></hr>
        <ul className="friend-list">
            {friends && friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
        </ul>
        </div>
    )
}

export default Friends