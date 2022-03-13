import { IWeatherDay } from './types'

/** Digests the array of forecast data from the weather API, reducing it down to the essentials.
 * @param {Array} weatherArray - Array forecast data from the weather API
 * @returns {Array} - Returns the digested array of data, reduced to the essentials.
 */
export const digestWeatherData = (weatherArray: Array<IWeatherDay>) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return weatherArray.map((day) => {
    return {
      day: weekDays[new Date(day.dt * 1000).getDay()], // returns the day of the week, abbreviated.
      temp: Math.round(day.temp.day), // average daily temperature, rounded to the nearest integer.
      weather: day.weather[0].main, // overall weather forecast for the day.
      weatherId: day.weather[0].id, // ID of the weather forecast, used to display the appropriate weather icon.
    }
  })
}
