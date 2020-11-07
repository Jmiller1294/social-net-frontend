import React from 'react'

const Friend = (props) => {
    const { friend } = props

    return (
        <div>
            <li>{friend.name}</li>
        </div>
    )
}

export default Friend;