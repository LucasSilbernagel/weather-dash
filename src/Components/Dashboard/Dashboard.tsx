import { Grid, Paper } from '@mui/material'
import TodayForecast from '../TodayForecast/TodayForecast'
import FutureForecastContainer from '../FutureForecast/FutureForecastContainer'

const Dashboard = () => {
  return (
    <Grid container item justifyContent="center" sx={{ marginTop: '1em' }}>
      <Paper
        sx={{
          padding: '0.25em',
          width: '100%',
          borderRadius: '15px',
        }}
        elevation={3}
      >
        <Grid container item direction="column">
          <TodayForecast />
          <FutureForecastContainer />
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Dashboard
