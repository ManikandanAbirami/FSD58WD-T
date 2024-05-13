import React, { useEffect, useRef } from 'react'

function Ref() {
    // Create a ref object using useRef hook
    const inputRef = useRef(null);

    useEffect(() => {
        // Automatically focus the input using the ref
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} placeholder='Already in focus' />
            <input type="text" placeholder='Click me to focus' />
        </div>
    )
}

export default Ref