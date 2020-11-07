import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    const { friends } = props

    return (
        <div>
            {friends && friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
        </div>
    )
}

export default Friends