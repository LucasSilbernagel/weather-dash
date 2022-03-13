import {
  BsFillCloudDrizzleFill,
  BsFillCloudRainHeavyFill,
  BsClouds,
  BsCloudLightningRainFill,
  BsCloudSnowFill,
  BsFillCloudHazeFill,
  BsFillSunFill,
} from 'react-icons/bs'

interface IComponentProps {
  weatherId: number
  size: string
}

/** Returns a weather icon according to the weather ID returned from the OpenWeatherMap API */
/** https://openweathermap.org/weather-conditions */
const WeatherIcon = (props: IComponentProps) => {
  const { weatherId, size } = props

  if (weatherId >= 200 && weatherId <= 232) {
    return (
      <BsCloudLightningRainFill style={{ color: '#30456A', fontSize: size }} />
    )
  } else if (weatherId >= 300 && weatherId <= 321) {
    return (
      <BsFillCloudDrizzleFill style={{ color: '#30456A', fontSize: size }} />
    )
  } else if (weatherId >= 500 && weatherId <= 531) {
    return (
      <BsFillCloudRainHeavyFill style={{ color: '#30456A', fontSize: size }} />
    )
  } else if (weatherId >= 600 && weatherId <= 622) {
    return <BsCloudSnowFill style={{ color: '#30456A', fontSize: size }} />
  } else if (weatherId >= 701 && weatherId <= 781) {
    return <BsFillCloudHazeFill style={{ color: '#30456A', fontSize: size }} />
  } else if (weatherId === 800) {
    return <BsFillSunFill style={{ color: '#30456A', fontSize: size }} />
  } else if (weatherId >= 801 && weatherId <= 804) {
    return <BsClouds style={{ color: '#30456A', fontSize: size }} />
  } else return null
}

export default WeatherIcon
