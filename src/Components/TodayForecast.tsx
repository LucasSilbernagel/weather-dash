import { Grid, Typography, Skeleton } from '@mui/material'
import { IDigestedWeatherDay } from '../types'
import WeatherIcon from './WeatherIcon'

interface IComponentProps {
  forecast: Array<IDigestedWeatherDay>
}

const TodayForecast = (props: IComponentProps) => {
  const { forecast } = props
  return (
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
              <WeatherIcon weatherId={forecast[0].weatherId} size={'10rem'} />
            ) : (
              <Skeleton variant="rectangular" width={140} height={150} />
            )}
          </Grid>
          <Grid item container direction="column" lg={2} alignItems="center">
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
                <Typography sx={{ fontSize: '2rem', fontWeight: 'light' }}>
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
  )
}

export default TodayForecast
