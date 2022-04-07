import { Grid, Typography, Skeleton } from '@mui/material'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { atomForecast } from '../../atoms'
import { useRecoilValue } from 'recoil'

const TodayForecast = () => {
  /** Array containing a five-day weather forecast for the selected city */
  const forecast = useRecoilValue(atomForecast)

  return (
    <Grid
      item
      lg={12}
      sx={{
        background: '#EEF6FB',
        padding: '2em 0 2em 0',
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
              <WeatherIcon day={forecast[0]} size={'10rem'} />
            ) : (
              <Skeleton variant="rectangular" width={140} height={130} />
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
                  {forecast[0].maxTemp}°
                </Typography>
              ) : (
                <Skeleton variant="text" width={80} height={90} />
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
                  {forecast[0].minTemp}°
                </Typography>
              ) : (
                <Skeleton variant="text" width={60} height={60} />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justifyContent="center" sx={{ marginTop: '1em' }}>
          {forecast.length ? (
            <Typography
              sx={{
                fontSize: '1.7rem',
                fontWeight: 'light',
                textTransform: 'capitalize',
              }}
            >
              {forecast[0].weather}
            </Typography>
          ) : (
            <Skeleton variant="text" width={220} height={50} />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TodayForecast
