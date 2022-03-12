import { Grid, CssBaseline } from '@mui/material'
import './style.css'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="column"
        sx={{
          background: '#eef6fb',
          paddingTop: '2em',
        }}
      >
        <NavBar />
        <Dashboard />
      </Grid>
    </>
  )
}

export default App
