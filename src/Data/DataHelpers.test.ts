/* eslint-disable jest/no-conditional-expect */
import fetch, { enableFetchMocks } from 'jest-fetch-mock'
import {
  buildURLWithQueryParams,
  getWeatherData,
  getGeocodingData,
} from './DataHelpers'
enableFetchMocks()

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
    return getWeatherData({
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
    return getGeocodingData({
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
  })
})
