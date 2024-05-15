import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect Called!!!!");
    document.title = `You clicked ${count} ${newCount} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked the button {count} times</p>
      <p>You clicked the New Count button {newCount} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setNewCount(newCount + 1)}>Click me to change new count button</button>
    </div >
  )
}

export default App
