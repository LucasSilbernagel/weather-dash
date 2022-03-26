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
  snow?: number
  rain?: number
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
  minTemp: number
  maxTemp: number
  weather: string
  weatherId: number
  dayId: number
}

/** Option for the city select */
export interface IGeocodingOption {
  country: string
  lat: number
  local_names?: Object
  lon: number
  name: string
  state?: string
}

/** Translations of country names from ISO country codes */
export interface IisoCountries {
  [key: string]: string
}

/** Formatted option for the city select */
export interface IDigestedGeocodingOption {
  cityName: string
  state: string
  country: string
  longitude: number
  latitude: number
  id: number
}

/** Default selected city to display in the city select */
export enum EDefaultSelectedCity {
  cityName = 'Toronto',
  country = 'Canada',
  id = 0,
  latitude = 43.6534817,
  longitude = -79.3839347,
  state = 'Ontario',
}
