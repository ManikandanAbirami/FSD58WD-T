import Card from "./Card";


function App() {

  let name = "Manikandan Anbalgan";
  let phone = 1231231234;

  return (
    <>
      {/* <div>Phone Contact Application</div>
      <button>Add</button>
      <div className="main">
        <span>Name: {name}</span><br />
        <span>Phone: {phone}</span>
      </div> */}
      <div style={{ display: "flex" }}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>


    </>
  )
}

export default App
