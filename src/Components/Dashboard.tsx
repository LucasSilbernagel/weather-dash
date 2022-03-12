import { Grid, Paper, Typography, Skeleton } from '@mui/material'
import { IDigestedWeatherDay } from '../types'
import WeatherIcon from './WeatherIcon'

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
          <Grid
            item
            lg={12}
            sx={{
              background: '#EEF6FB',
              padding: '3em 0 3em 0',
              borderRadius: '15px 15px 0 0',
              border: '0.25em #FFFFFF solid',
            }}
          >
            <Grid container item direction="column">
              <Grid container item justifyContent="center">
                <Grid item>
                  {forecast.length ? (
                    <Typography variant="h4" sx={{ fontWeight: 'light' }}>
                      Today
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={130} height={42} />
                  )}
                </Grid>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item container lg={3} justifyContent="center">
                  {forecast.length ? (
                    <WeatherIcon
                      weatherId={forecast[0].weatherId}
                      size={'10rem'}
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={140} height={150} />
                  )}
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  lg={2}
                  alignItems="center"
                >
                  <Grid item>
                    {forecast.length ? (
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontSize: '4rem',
                          fontFamily: 'Coda',
                        }}
                      >
                        {forecast[0].temp}°
                      </Typography>
                    ) : (
                      <Skeleton variant="text" width={80} height={95} />
                    )}
                  </Grid>
                  <Grid item>
                    {forecast.length ? (
                      <Typography
                        sx={{ fontSize: '2rem', fontWeight: 'light' }}
                      >
                        {forecast[0].weather}
                      </Typography>
                    ) : (
                      <Skeleton variant="text" width={80} height={50} />
                    )}
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
                padding: '2em 0 2em 0',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  {forecast.length ? (
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[1].day}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={35} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <WeatherIcon
                      weatherId={forecast[1].weatherId}
                      size={'4rem'}
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={70} height={70} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[1].temp}°
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={45} />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                padding: '2em 0 2em 0',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  {forecast.length ? (
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[2].day}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={35} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <WeatherIcon
                      weatherId={forecast[2].weatherId}
                      size={'4rem'}
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={70} height={70} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[2].temp}°
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={45} />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                borderRadius: '0 0 0 15px',
                padding: '2em 0 2em 0',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  {forecast.length ? (
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[3].day}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={35} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <WeatherIcon
                      weatherId={forecast[3].weatherId}
                      size={'4rem'}
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={70} height={70} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[3].temp}°
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={45} />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                borderRadius: '0 0 0 15px',
                padding: '2em 0 2em 0',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  {forecast.length ? (
                    <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                      {forecast[4].day}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={35} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <WeatherIcon
                      weatherId={forecast[4].weatherId}
                      size={'4rem'}
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={70} height={70} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {forecast[4].temp}°
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={45} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Dashboard
