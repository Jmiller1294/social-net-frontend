import React from 'react'

const Friend = (props) => {
    const { friend } = props

    return (
        <li class='friend selected'>
            <img />
            <div class='name'>
                {friend.name}
            </div>
        </li>
    )
}

export default Friend;