import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, purple, orange } from '@mui/material/colors';
import { CssBaseline, Container } from '@mui/material';
import UserList from './UserList';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './Login';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/' element={<Navigate to="/login"></Navigate>}></Route>
          </Routes>
        </Container>
      </ThemeProvider >
    </Router>
  )
}

export default App
