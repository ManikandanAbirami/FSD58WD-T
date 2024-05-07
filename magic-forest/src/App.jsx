import { useState } from "react"
import Tree from "./Tree";


function App() {

  const [color, setColor] = useState('green');
  const [fruit, setFruit] = useState('apples');

  function handleChangeColor(newColor) {
    setColor(newColor);
  }

  function handleChangeFruit(newFruit) {
    setFruit(newFruit);
  }

  return (
    <div>
      <Tree color={color} fruit={fruit} />
      <button onClick={() => handleChangeColor('red')}>Red</button>
      <button onClick={() => handleChangeColor('blue')}>Blue</button>
      <button onClick={() => handleChangeFruit('oranges')}>Grow Orange</button>
      <button onClick={() => handleChangeFruit('guava')}>Grow Guava</button>
    </div>
  )
}

export default App
