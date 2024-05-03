import React, { useState } from 'react'

function StateComponent() {
    const [num1, setNum1] = useState(100);
    const [num2, setNum2] = useState(200);

    const num1Increase = () => {
        setNum1(num1 + 1);
    }

    const num2Increase = () => {
        setNum2(num2 + 1);
    }
    return (
        <div>
            <div>StateComponent</div>
            <span>Num1: {num1}</span><br />
            <button onClick={num1Increase}>Increase Number 1</button><br />
            <span>Num2: {num2}</span><br />
            <button onClick={num2Increase}>Increase Number 2</button>
        </div>
    )
}

export default StateComponent