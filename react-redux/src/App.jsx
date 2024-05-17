import { Provider } from "react-redux"
import store from "./redux/store"
import ToyBox from "./components/ToyBox"

// We use 'Provider' to make our Redux store available to 'ToyBox' component.

function App() {

  return (
    <Provider store={store}>
      <ToyBox />
    </Provider>
  )
}

export default App
