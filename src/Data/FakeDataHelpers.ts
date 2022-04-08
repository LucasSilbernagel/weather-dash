import { IGeocodingOption, IWeatherDay, IDigestedWeatherDay } from '../types'

export const fakeWeatherDay: IWeatherDay = {
  clouds: 99,
  dew_point: 2.06,
  dt: 1648314000,
  feels_like: { day: 1.52, night: -4, eve: 0.01, morn: -0.5 },
  humidity: 81,
  moon_phase: 0.8,
  moonrise: 1648283160,
  moonset: 1648314300,
  pop: 0.65,
  pressure: 996,
  rain: 1.88,
  sunrise: 1648292989,
  sunset: 1648337782,
  temp: { day: 5.05, min: 1.53, max: 6.35, night: 1.53, eve: 4.37, morn: 2.45 },
  uvi: 1.55,
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
  wind_deg: 311,
  wind_gust: 11.96,
  wind_speed: 7.14,
}

export const fakeGeocodingOption: IGeocodingOption = {
  country: 'CA',
  lat: 43.6534817,
  local_names: { ca: 'Toronto' },
  lon: -79.3839347,
  name: 'Toronto',
  state: 'Ontario',
}

export const fakeForecast: Array<IDigestedWeatherDay> = [
  {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'light snow',
    weatherId: 600,
  },
  {
    day: 'Fri',
    dayId: 1,
    maxTemp: 6,
    minTemp: 0,
    weather: 'light snow',
    weatherId: 600,
  },
  {
    day: 'Sat',
    dayId: 2,
    maxTemp: 5,
    minTemp: -0,
    weather: 'broken clouds',
    weatherId: 803,
  },
  {
    day: 'Sun',
    dayId: 3,
    maxTemp: 6,
    minTemp: 1,
    weather: 'light snow',
    weatherId: 600,
  },
  {
    day: 'Mon',
    dayId: 4,
    maxTemp: 6,
    minTemp: 1,
    weather: 'light rain',
    weatherId: 500,
  },
]
