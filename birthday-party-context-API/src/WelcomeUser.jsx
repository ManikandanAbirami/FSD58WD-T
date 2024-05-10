import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function WelcomeUser() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Hello {user.name}</h1>
        </div>
    )
}

export default WelcomeUser