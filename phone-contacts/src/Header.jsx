import React from 'react'
import "./Header.css"

function Header(props) {
    return (
        <div className="header">
            {props.headerName}
        </div>
    )
}

export default Header