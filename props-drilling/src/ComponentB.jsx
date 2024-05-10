import React from 'react'

function ComponentB(props) {
    return (
        <div>
            <button onClick={() => props.displayName("Guvi")}>Change Name</button>
        </div>
    )
}

export default ComponentB