import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Profile from "./Profile";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
