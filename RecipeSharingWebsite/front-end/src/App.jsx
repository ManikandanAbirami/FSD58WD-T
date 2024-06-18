import React from "react"
import { BrowserRouter as Router, Route, Navigate, Routes, redirect } from 'react-router-dom'
import { Layout } from 'antd'
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddRecipe from "./pages/AddRecipe"
import UpdateRecipe from "./pages/UpdateRecipe"
// import './App.css'

const { Content } = Layout;

function App() {

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Navbar />
          <Content style={{ padding: '0 50px', marginTop: '64px' }}>
            <Routes>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              {isAuthenticated ? (
                <>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/add-recipe' element={<AddRecipe />}></Route>
                  <Route path="/update-recipe/:recipeId" element={<UpdateRecipe />}></Route>
                  {/* <Route path="*" element={<Navigate to="/" />} /> */}
                </>
              ) : (<Route path="*" element={<Navigate to="/login" />} />)}

              {/* <Route path='/' element={<Navigate to="/login"></Navigate>}></Route> */}
            </Routes>
          </Content>
        </Layout>
      </Router >
    </AuthProvider>
  )
}

export default App
