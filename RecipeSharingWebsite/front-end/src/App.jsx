import React from "react"
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddRecipe from "./pages/AddRecipe"
// import './App.css'

const { Content } = Layout;

function App() {

  return (
    <Router>
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px', marginTop: '64px' }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/add-recipe' element={<AddRecipe />}></Route>
            {/* <Route path='/' element={<Navigate to="/login"></Navigate>}></Route> */}
          </Routes>
        </Content>
      </Layout>
    </Router >
  )
}

export default App
