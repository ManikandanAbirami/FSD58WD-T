import React from 'react'
import { useState } from "react"
import Child from './Child';

function App() {
  const [familyName, setFamilyName] = useState("");

  const updateFamilyName = (name) => {
    setFamilyName(name);
  }

  return (
    <div>
      <Child familyName={familyName} />
      <button onClick={() => updateFamilyName("Gellers")}>Get Family Name</button>
    </div>
  )
}

export default App
