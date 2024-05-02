import React from 'react'
import './Post.css'

function Post(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-body">
                    <h2>{props.name}</h2>
                    <p>No Listing</p>
                    <p>5 Matches Per Day</p>
                    <p>10 Messages Per Day</p>
                    <p>Unlimited App Usage</p>
                    <button className="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Post