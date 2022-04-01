import {
  BsFillCloudDrizzleFill,
  BsFillCloudRainHeavyFill,
  BsClouds,
  BsCloudLightningRainFill,
  BsCloudSnowFill,
  BsFillCloudHazeFill,
  BsFillSunFill,
} from 'react-icons/bs'
import { IDigestedWeatherDay } from '../../types'

interface IComponentProps {
  day: IDigestedWeatherDay
  size: string
}

/** Returns a weather icon according to the weather ID returned from the OpenWeatherMap API */
/** https://openweathermap.org/weather-conditions */
const WeatherIcon = (props: IComponentProps) => {
  const { day, size } = props

  if (day.weatherId >= 200 && day.weatherId <= 232) {
    return (
      <BsCloudLightningRainFill
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (day.weatherId >= 300 && day.weatherId <= 321) {
    return (
      <BsFillCloudDrizzleFill
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (day.weatherId >= 500 && day.weatherId <= 531) {
    return (
      <BsFillCloudRainHeavyFill
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (day.weatherId >= 600 && day.weatherId <= 622) {
    return (
      <BsCloudSnowFill
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (day.weatherId >= 701 && day.weatherId <= 781) {
    return (
      <BsFillCloudHazeFill
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (day.weatherId === 800) {
    return (
      <BsFillSunFill
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (day.weatherId >= 801 && day.weatherId <= 804) {
    return (
      <BsClouds
        role="img"
        aria-label={day.weather}
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else return null
}

export default WeatherIcon
