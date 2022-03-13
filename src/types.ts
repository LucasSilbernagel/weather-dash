/** "Feels like" object from the weather API */
interface IFeelsLike {
  day: number
  eve: number
  morn: number
  night: number
}

/** Temperature object from the weather API */
interface ITemp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

/** Weather object from the weather API */
interface IWeatherObject {
  description: string
  icon: string
  id: number
  main: string
}

/** One day of forecast data from the weather API */
export interface IWeatherDay {
  clouds: number
  dew_point: number
  dt: number
  feels_like: IFeelsLike
  humidity: number
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  snow: number
  sunrise: number
  sunset: number
  temp: ITemp
  uvi: number
  weather: Array<IWeatherObject>
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

/** One day of forecast data from the weather API, digested and reduced to the essentials */
export interface IDigestedWeatherDay {
  day: string
  temp: number
  weather: string
  weatherId: number
}

/** City location coordinates, latitude and longitude */
interface ICoordinates {
  lon: number
  lat: number
}

/** City options for the weather app */
export interface ICities {
  [key: string]: ICoordinates
}
