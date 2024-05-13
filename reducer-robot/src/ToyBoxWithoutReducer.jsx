import React, { useState } from 'react'

function ToyBoxWithoutReducer() {
    const [toys, setToys] = useState(['blocks', 'cars', 'dolls']);

    const addToy = (toy) => {
        setToys([...toys, toy]); // Add a toy
    }

    const removeToy = (toy) => {
        setToys(toys.filter(t => t !== toy)); // Remove a specific toy
    }
    return (
        <div>
            <h1>Toy Box</h1>
            {toys.map((toy, index) => <p key={index}>{toy}</p>)}
            <button onClick={() => addToy('puzzle')}>Add Puzzle</button>
            <button onClick={() => removeToy('cars')}>Remove Cars</button>
        </div>
    )
}

export default ToyBoxWithoutReducer