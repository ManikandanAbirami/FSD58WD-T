import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Course() {
    const user = useContext(UserContext);
    return (
        <div>
            <p>Your course is {user.course}</p>
        </div>
    )
}

export default Course