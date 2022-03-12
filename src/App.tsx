import { Grid, CssBaseline } from '@mui/material'
import './style.css'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{
          background: '#eef6fb',
          justifyContent: 'center',
          paddingTop: '2em',
        }}
      >
        <NavBar />
      </Grid>
    </>
  )
}

export default App
