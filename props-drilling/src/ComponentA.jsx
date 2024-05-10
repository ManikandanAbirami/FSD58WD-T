import React from 'react'
import { useState } from 'react'
import ComponentB from './ComponentB'

function ComponentA(props) {
    return (
        <div>
            <ComponentB displayName={props.displayName} />
        </div>
    )
}

export default ComponentA