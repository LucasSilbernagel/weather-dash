import { IWeatherDay } from './types'

export const digestWeatherData = (weatherArray: Array<IWeatherDay>) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return weatherArray.map((day) => {
    return {
      day: weekDays[new Date(day.dt * 1000).getDay()],
      temp: Math.round(day.temp.day),
      weather: day.weather[0].main,
      weatherId: day.weather[0].id,
    }
  })
}
