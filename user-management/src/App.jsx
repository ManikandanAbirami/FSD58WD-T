import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, purple, orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import UserList from './UserList';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserList />
    </ThemeProvider>
  )
}

export default App
