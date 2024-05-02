import Post from "./Post"
import './App.css'


function App() {

  let postOne = "Manikandan's BD";
  let postTwo = "Annual Day";
  let postThree = "Farewell Party";

  const headerStyle = {
    textAlign: 'center', padding: 20, background: "#000", color: "#fff", textTransform: 'uppercase', margin: 10
  }

  return (
    <section id="pricing">
      <div style={headerStyle}> Price Card</div>
      <div class="row">
        <Post name="FREE" listing="" className="pricing-column col-lg-4 col-md-6"></Post>
        <Post name="PLUS" listing="" className="pricing-column col-lg-4 col-md-6"></Post>
        <Post name="PRO" listing="" className="pricing-column col-lg-4"></Post>
      </div>
    </section >
  )
}

export default App
