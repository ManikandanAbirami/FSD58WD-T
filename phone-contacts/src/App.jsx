import Header from "./Header";
import "./index.css"


function App() {

  let handleClick = () => {
    alert("Add button clicked!!!");
  }

  let demoValues = [
    { id: 100, propertyOne: "ValueOne", propertyTwo: "ValueTwo", propertyThree: "ValueThree" },
    { id: 101, propertyOne: "ValueOneMore", propertyTwo: "ValueTwoMore", propertyThree: "ValueThreeMore" }];

  return (
    <div className="container">
      {false ? <Header /> : <span>No Header</span>}
      <div className="body-container">
        <button onClick={handleClick} className="btn btn-success">Add</button>
        <ul>
          {demoValues.map((item, index) => (
            <li key={item.id}>
              <span>{item.propertyThree + " "}</span>
              <span>{item.propertyOne + " "}</span>
              <span>{item.propertyTwo}</span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default App
