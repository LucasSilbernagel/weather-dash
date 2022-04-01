import { render, screen } from '@testing-library/react'
import WeatherIcon from './WeatherIcon'
import { RecoilRoot } from 'recoil'

const weatherDays = [
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
]

describe('WeatherIcon', () => {
  test('renders snow icon', () => {
    render(
      <RecoilRoot>
        <WeatherIcon day={weatherDays[0]} size={'2rem'} />
      </RecoilRoot>
    )
    expect(screen.getAllByLabelText('light snow')).toBeTruthy()
  })
  test('renders cloud icon', () => {
    render(
      <RecoilRoot>
        <WeatherIcon day={weatherDays[1]} size={'2rem'} />
      </RecoilRoot>
    )
    expect(screen.getAllByLabelText('broken clouds')).toBeTruthy()
  })
})
