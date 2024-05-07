import React from 'react'

function Tree({ color, fruit }) {
    return (
        <div style={{ color: color }}>
            <h2>This tree is {color} and has {fruit}.</h2>
        </div>
    )
}

export default Tree