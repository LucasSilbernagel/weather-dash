import { digestWeatherData, digestGeocodingData } from './LogicHelpers'
import { fakeWeatherDay, fakeGeocodingOption } from '../Data/FakeDataHelpers'

test('digestWeatherData', () => {
  expect(digestWeatherData([fakeWeatherDay])).toStrictEqual([
    {
      day: 'Sat',
      dayId: 0,
      maxTemp: 6,
      minTemp: 2,
      weather: 'light rain',
      weatherId: 500,
    },
  ])
})

test('digestGeocodingData', () => {
  expect(digestGeocodingData([fakeGeocodingOption])).toStrictEqual([
    {
      cityName: 'Toronto',
      state: 'Ontario',
      country: 'Canada',
      longitude: -79.3839347,
      latitude: 43.6534817,
      id: 0,
    },
  ])
})
