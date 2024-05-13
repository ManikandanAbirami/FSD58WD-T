import React, { useReducer } from 'react'

function reducer(toys, action) {
    switch (action.type) {
        case 'add_toy':
            return [...toys, action.payload]; // Add a toy
        case 'remove_toy':
            return toys.filter(toy => toy !== action.payload);
        default:
            return toys;
    }
}

// dispatch(action) ==> action {type: "add_toy", value: 'puzzle'}

function ToyBoxWithReducer() {
    const [toys, dispatch] = useReducer(reducer, ['blocks', 'cars', 'dolls']);
    return (
        <div>
            <h1>Toy Boc - With useReducer</h1>
            {toys.map((toy, index) => <p key={index}>{toy}</p>)}
            <button onClick={() => dispatch({ type: 'add_toy', payload: 'puzzle' })}>Add Puzzle</button>
            <button onClick={() => dispatch({ type: 'remove_toy', payload: 'cars' })}>Remove Cars</button>
        </div>
    )
}

export default ToyBoxWithReducer