interface IFeelsLike {
  day: number
  eve: number
  morn: number
  night: number
}

interface ITemp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

interface IWeatherObject {
  description: string
  icon: string
  id: number
  main: string
}

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

export interface IDigestedWeatherDay {
  day: string
  temp: number
  weather: string
  weatherId: number
}

interface ICoordinates {
  lon: number
  lat: number
}

export interface ICities {
  [key: string]: ICoordinates
}
