import { Grid, Typography, Skeleton } from '@mui/material'
import { IDigestedWeatherDay } from '../types'
import WeatherIcon from './WeatherIcon'

interface IComponentProps {
  forecast: Array<IDigestedWeatherDay>
}

/** Returns weather forecast for the next four days */
const FutureForecast = (props: IComponentProps) => {
  const { forecast } = props
  return (
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
              <WeatherIcon weatherId={forecast[1].weatherId} size={'4rem'} />
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
              <WeatherIcon weatherId={forecast[2].weatherId} size={'4rem'} />
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
          borderRadius: '0 0 0 0',
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
              <WeatherIcon weatherId={forecast[3].weatherId} size={'4rem'} />
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
          borderRadius: '0 0 15px 0',
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
              <WeatherIcon weatherId={forecast[4].weatherId} size={'4rem'} />
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
  )
}

export default FutureForecast
