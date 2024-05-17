import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToy, removeToy } from '../redux/toySlice'; // Import actions

function ToyBox() {
    const toys = useSelector((state) => state.toys.toys) // Get toys from the Redux store
    const dispatch = useDispatch();

    const handleAddToy = () => {
        const toy = prompt("Enter the name of the toy to add:");
        if (toy) dispatch(addToy(toy)); // Dispatch addToy action
    }

    const handleRemoveToy = () => {
        const toy = prompt("Enter the name of the toy to remove:");
        if (toy) dispatch(removeToy(toy)); // Dispatch removeToy action
    }

    return (
        <div>
            <h1>My Toy Box</h1>
            <button onClick={handleAddToy}>Add Toy</button>
            <button onClick={handleRemoveToy}>Remove Toy</button>
            <ul>
                {toys.map((toy, index) => (
                    <li key={index}>{toy}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToyBox