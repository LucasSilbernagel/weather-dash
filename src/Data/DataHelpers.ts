import { IDigestedGeocodingOption, TUnits } from '../types'

/** Gets weather forecast data from the OpenWeatherMap API
 * @param {IDigestedGeocodingOption} selectedCity The city for which to display a weather forecast
 * @param {String} units Metric or imperial units for temperatures
 * @returns {Promise<Response>}
 */
export const getWeatherData = (
  selectedCity: IDigestedGeocodingOption,
  units: TUnits
) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&exclude=minutely,hourly,alerts&units=${units}`
  )
}

/** Gets geocoding (city) data from the OpenWeatherMap API
 * @param {String} searchedCity The city name that the user has typed into the city search autocomplete
 * @returns {Promise<Response>}
 */
export const getGeocodingData = (searchedCity: string) => {
  return fetch(
    `https://api.openweathermap.org/geo/1.0/direct?appid=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchedCity}&limit=3`
  )
}
