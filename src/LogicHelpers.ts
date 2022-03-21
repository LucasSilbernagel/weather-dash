import { IWeatherDay, IGeocodingOption } from './types'
import { isoCountries } from './constants'

/** Digests the array of forecast data from the weather API, reducing it down to the essentials.
 * @param {Array} weatherArray - Array of forecast data from the weather API
 * @returns {Array} - Returns the digested array of data, reduced to the essentials.
 */
export const digestWeatherData = (weatherArray: Array<IWeatherDay>) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return weatherArray.map((day, index) => {
    return {
      day: weekDays[new Date(day.dt * 1000).getDay()], // returns the day of the week, abbreviated.
      minTemp: Math.round(day.temp.min), // minimum daily temperature, rounded to the nearest integer.
      maxTemp: Math.round(day.temp.max), // maximum daily temperature, rounded to the nearest integer.
      weather: day.weather[0].description, // overall weather forecast for the day.
      weatherId: day.weather[0].id, // ID of the weather forecast, used to display the appropriate weather icon.
      dayId: index,
    }
  })
}

/** Digests the array of geocoding data from the weather API, reducing it down to the essentials.
 * @param {Array} geocodingData - Array of geocoding data (cites) from the weather API
 * @returns {Array} - Returns the digested array of geocoding (city) data, reduced to the essentials.
 */
export const digestGeocodingData = (geocodingData: Array<IGeocodingOption>) => {
  return geocodingData.map((option, index) => {
    return {
      cityName: option.name,
      state: option.state ? option.state : '',
      country: isoCountries[option.country],
      longitude: option.lon,
      latitude: option.lat,
      id: index,
    }
  })
}
