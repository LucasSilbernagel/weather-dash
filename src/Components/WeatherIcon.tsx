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
      <BsCloudLightningRainFill
        aria-label="thunder storm"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (weatherId >= 300 && weatherId <= 321) {
    return (
      <BsFillCloudDrizzleFill
        aria-label="drizzle"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (weatherId >= 500 && weatherId <= 531) {
    return (
      <BsFillCloudRainHeavyFill
        aria-label="Rain"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (weatherId >= 600 && weatherId <= 622) {
    return (
      <BsCloudSnowFill
        aria-label="snow"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (weatherId >= 701 && weatherId <= 781) {
    return (
      <BsFillCloudHazeFill
        aria-label="mist, smoke, haze, fog, or dust"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (weatherId === 800) {
    return (
      <BsFillSunFill
        aria-label="clear skies"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else if (weatherId >= 801 && weatherId <= 804) {
    return (
      <BsClouds
        aria-label="Cloudy"
        style={{ color: '#30456A', fontSize: size }}
      />
    )
  } else return null
}

export default WeatherIcon
