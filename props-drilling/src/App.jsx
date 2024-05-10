import React from 'react'
import { useState } from 'react'
import ComponentA from './ComponentA';

function App() {
  const [name, setName] = useState('no-name')

  const displayName = (newName) => {
    setName(newName);
  }
  return (
    <div>
      <h1>{name}</h1>
      <ComponentA displayName={displayName}></ComponentA>
    </div>
  )
}

export default App
