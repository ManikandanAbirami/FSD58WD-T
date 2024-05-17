import { useState } from "react";


function App() {
  const [result, setResult] = useState(0);
  // let result = 0;

  const operation = (a, b, c) => {
    setResult(a + b + c);
    console.log("Result: ", a + b + c);
  }

  return (
    <div>
      <h1>State Management in React JS</h1>
      <button onClick={() => operation(30, 30, 30)}>Change Result</button>
      <p>Result: {result}</p>
    </div>
  )
}

export default App
