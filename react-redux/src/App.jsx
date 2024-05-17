import { Provider } from "react-redux"
import store from "./redux/store"
import ToyBox from "./components/ToyBox"


function App() {

  return (
    <Provider store={store}>
      <ToyBox />
    </Provider>
  )
}

export default App
