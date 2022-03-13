import { Grid, Paper } from '@mui/material'
import { IDigestedWeatherDay } from '../types'
import TodayForecast from './TodayForecast'
import FutureForecast from './FutureForecast'

interface IComponentProps {
  forecast: Array<IDigestedWeatherDay>
}

const Dashboard = (props: IComponentProps) => {
  const { forecast } = props
  return (
    <Grid container item justifyContent="center" sx={{ marginTop: '1em' }}>
      <Paper
        sx={{
          padding: '0.25em',
          width: '100%',
          maxWidth: '800px',
          borderRadius: '15px',
        }}
        elevation={3}
      >
        <Grid container item direction="column">
          <TodayForecast forecast={forecast} />
          <FutureForecast forecast={forecast} />
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Dashboard
