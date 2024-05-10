import React from 'react'
import GrandChild from './GrandChild'

function Child(props) {
    return (
        <div>
            <h1>Displaying Ross's Family Name:</h1>
            <GrandChild familyName={props.familyName} />
        </div>
    )
}

export default Child