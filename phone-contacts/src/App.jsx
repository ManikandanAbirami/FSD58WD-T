import AddContacts from "./AddContacts"
import ShowContacts from "./ShowContacts"
import "./App.css"
import StateComponent from "./StateComponent";

function App() {

  let phoneContactList = [
    {
      id: 1,
      name: "Manikandan Anbalagan",
      phone: "566565656"
    },
    {
      id: 2,
      name: "M S Dhoni",
      phone: "3232323232"
    },
    {
      id: 3,
      name: "L Balaji",
      phone: "55555555"
    },
    {
      id: 4,
      name: "K L Rahul",
      phone: "4444444444"
    }
  ];

  return (
    <div>
      {/* <ShowContacts contactList={phoneContactList} /> */}
      <hr />
      {/* <AddContacts /> */}
      <StateComponent />
    </div>
  )
}

export default App
