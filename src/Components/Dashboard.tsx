import { Grid, Paper, Typography } from '@mui/material'
import { IDigestedWeatherDay } from '../types'
import WeatherIcon from './WeatherIcon'

interface IComponentProps {
  forecast: Array<IDigestedWeatherDay>
}

const Dashboard = (props: IComponentProps) => {
  const { forecast } = props
  if (forecast.length) {
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
            <Grid
              item
              lg={12}
              sx={{
                background: '#EEF6FB',
                padding: '2em',
                borderRadius: '15px 15px 0 0',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column">
                <Grid container item justifyContent="center">
                  <Grid item>
                    <Typography variant="h4" sx={{ fontWeight: 'light' }}>
                      Today
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container justifyContent="center">
                  <Grid item container lg={3} justifyContent="center">
                    <WeatherIcon
                      weatherId={forecast[0].weatherId}
                      size={'10rem'}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    lg={2}
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontSize: '4rem',
                          fontFamily: 'Coda',
                        }}
                      >
                        {forecast[0].temp}°
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: '2rem', fontWeight: 'light' }}
                      >
                        {forecast[0].weather}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid
                container
                item
                lg={3}
                sx={{
                  background: '#EEF6FB',
                  borderRadius: '0 0 0 15px',
                  padding: '1em',
                  border: '0.25em #FFFFFF solid',
                }}
              >
                <Grid container item direction="column" alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[1].day}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <WeatherIcon
                      weatherId={forecast[1].weatherId}
                      size={'4rem'}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[1].temp}°
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                item
                lg={3}
                sx={{
                  background: '#EEF6FB',
                  padding: '1em',
                  border: '0.25em #FFFFFF solid',
                }}
              >
                <Grid container item direction="column" alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[2].day}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <WeatherIcon
                      weatherId={forecast[2].weatherId}
                      size={'4rem'}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[2].temp}°
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                item
                lg={3}
                sx={{
                  background: '#EEF6FB',
                  padding: '1em',
                  border: '0.25em #FFFFFF solid',
                }}
              >
                <Grid container item direction="column" alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[3].day}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <WeatherIcon
                      weatherId={forecast[3].weatherId}
                      size={'4rem'}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[3].temp}°
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                item
                lg={3}
                sx={{
                  background: '#EEF6FB',
                  borderRadius: '0 0 15px 0',
                  padding: '1em',
                  border: '0.25em #FFFFFF solid',
                }}
              >
                <Grid container item direction="column" alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[4].day}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <WeatherIcon
                      weatherId={forecast[4].weatherId}
                      size={'4rem'}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[4].temp}°
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  } else return null
}

export default Dashboard
