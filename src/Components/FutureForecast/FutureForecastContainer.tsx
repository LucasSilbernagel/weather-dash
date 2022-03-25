import { useState, useEffect } from 'react'
import { IDigestedWeatherDay } from '../../types'
import FutureForecast from './FutureForecast'
import { atomForecast } from '../../atoms'
import { useRecoilValue } from 'recoil'

/** Returns weather forecast for the next four days */
const FutureForecastContainer = () => {
  /** Array containing a five-day weather forecast for the selected city */
  const forecast = useRecoilValue(atomForecast)

  /** The next four days of the weather forecast */
  const [futureDays, setFutureDays] = useState<IDigestedWeatherDay[]>([])

  /** Array to map over in order to display Skeleton when forecast data has not yet loaded */
  const blankDays = ['day1', 'day2', 'day3', 'day4']

  /** Forecast of the next four days is the original forecast array with "today" removed. */
  useEffect(() => {
    if (forecast.length > 0) {
      const forecastCopy = [...forecast]
      const nextDays = forecastCopy.splice(1)
      setFutureDays(nextDays)
    }
  }, [forecast])

  return <FutureForecast futureDays={futureDays} blankDays={blankDays} />
}

export default FutureForecastContainer
