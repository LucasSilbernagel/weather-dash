const baseURL = 'https://api.openweathermap.org'

/** A helper method to build a URL with query parameters
 * @param {String} endpoint The endpoint you're trying to reach
 * @param {Object<String>} params the search parameters
 * @returns {String} URL
 */
const buildURLWithQueryParams = (
  endpoint: string,
  params: { appid?: string }
) => {
  const url = new URL([baseURL, endpoint].join(''))
  params.appid = process.env.REACT_APP_WEATHER_API_KEY
  const urlSearchParams = new URLSearchParams(params)
  url.search = String(urlSearchParams)
  return url.href
}

/** Gets weather forecast data from the OpenWeatherMap API
 * @param {Object} params the search parameters
 * @returns {Promise<Response>}
 */
export const getWeatherData = (params = {}) => {
  return fetch(buildURLWithQueryParams(`/data/2.5/onecall`, params))
}

/** Gets geocoding (city) data from the OpenWeatherMap API
 * @param {Object} params the search parameters
 * @returns {Promise<Response>}
 */
export const getGeocodingData = (params = {}) => {
  return fetch(buildURLWithQueryParams(`/geo/1.0/direct`, params))
}