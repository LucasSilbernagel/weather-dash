import { Grid, Typography, Skeleton, Tooltip } from '@mui/material'
import { IDigestedWeatherDay } from '../../types'
import WeatherIcon from '../WeatherIcon'
import { atomForecast } from '../../atoms'
import { useRecoilValue } from 'recoil'

interface IComponentProps {
  futureDays: Array<IDigestedWeatherDay>
  blankDays: string[]
}

/** Returns weather forecast for the next four days */
const FutureForecast = (props: IComponentProps) => {
  const { futureDays, blankDays } = props

  /** Array containing a five-day weather forecast for the selected city */
  const forecast = useRecoilValue(atomForecast)

  /** Display forecast data when it has loaded */
  if (futureDays.length) {
    return (
      <Grid container item>
        {futureDays.map((futureDay) => {
          return (
            <Grid
              key={futureDay.dayId}
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
                      {futureDay.day}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={35} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <Tooltip
                      title={
                        <span style={{ textTransform: 'capitalize' }}>
                          {futureDay.weather}
                        </span>
                      }
                      placement="top"
                    >
                      <span>
                        <WeatherIcon day={futureDay} size={'4rem'} />
                      </span>
                    </Tooltip>
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
                      {futureDay.maxTemp}°
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={45} />
                  )}
                </Grid>
                <Grid item>
                  {forecast.length ? (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      {futureDay.minTemp}°
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={70} height={45} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    )
    /** If forecast data has not loaded, display Skeleton. */
  } else {
    return (
      <Grid container item>
        {blankDays.map((day) => {
          return (
            <Grid
              key={day}
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
                  <Skeleton variant="text" width={70} height={35} />
                </Grid>
                <Grid item>
                  <Skeleton variant="rectangular" width={70} height={70} />
                </Grid>
                <Grid item>
                  <Skeleton variant="text" width={70} height={45} />
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default FutureForecast
