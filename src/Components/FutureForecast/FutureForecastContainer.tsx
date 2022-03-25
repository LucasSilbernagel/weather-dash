import { useState, useEffect } from 'react'
import { IDigestedWeatherDay } from '../../types'
import FutureForecast from './FutureForecast'

interface IComponentProps {
  forecast: Array<IDigestedWeatherDay>
}

/** Returns weather forecast for the next four days */
const FutureForecastContainer = (props: IComponentProps) => {
  const { forecast } = props

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

  return (
    <FutureForecast
      forecast={forecast}
      futureDays={futureDays}
      blankDays={blankDays}
    />
  )
}

export default FutureForecastContainer
