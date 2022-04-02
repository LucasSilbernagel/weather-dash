import fetch, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import {
  buildURLWithQueryParams,
  getWeatherData,
  getGeocodingData,
} from './DataHelpers'

describe('buildURLWithQueryParams', () => {
  test('buildURLWithQueryParams', () => {
    expect(
      buildURLWithQueryParams(`/data/2.5/onecall`, { units: 'metric' })
    ).toBe('https://api.openweathermap.org/data/2.5/onecall?units=metric')
  })
})

describe('getWeatherData', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('makes a forecast request to the weather API', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        lat: 43.65107,
        lon: -79.347015,
        exclude: 'minutely,hourly,alerts',
        units: 'metric',
      })
    )
    getWeatherData({
      lat: 43.65107,
      lon: -79.347015,
      exclude: 'minutely,hourly,alerts',
      units: 'metric',
    })
      .then((res: any) => res.json())
      .then((data) =>
        expect(data).toBeEqual({
          lat: 43.65107,
          lon: -79.347015,
          exclude: 'minutely,hourly,alerts',
          units: 'metric',
        })
      )
      .catch((err) => err)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(
      'https://api.openweathermap.org/data/2.5/onecall?lat=43.65107&lon=-79.347015&exclude=minutely%2Chourly%2Calerts&units=metric'
    )
  })
})

describe('getGeocodingData', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('makes a geocoding request to the weather API', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        q: 'Toronto',
        limit: 3,
      })
    )
    getGeocodingData({
      q: 'Toronto',
      limit: 3,
    })
      .then((res: any) => res.json())
      .then((data) =>
        expect(data).toBeEqual({
          q: 'Toronto',
          limit: 3,
        })
      )
      .catch((err) => err)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(
      'https://api.openweathermap.org/geo/1.0/direct?q=Toronto&limit=3'
    )
  })
})
