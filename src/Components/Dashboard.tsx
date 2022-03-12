import { Grid, Paper, Typography } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container item justifyContent="center" sx={{ marginTop: '1em' }}>
      <Paper sx={{ padding: '0.5em', width: '100%', maxWidth: '800px' }}>
        <Grid container item direction="column">
          <Grid item lg={12} sx={{ background: '#EEF6FB' }}>
            <Typography>Today</Typography>
          </Grid>
          <Grid container item>
            <Grid item lg={3}>
              <Typography>Wed</Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography>Thur</Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography>Fri</Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography>Sat</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Dashboard
