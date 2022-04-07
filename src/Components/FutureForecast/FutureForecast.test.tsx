import { render, screen } from '@testing-library/react'
import FutureForecast from './FutureForecast'
import { RecoilRoot } from 'recoil'

const fakeFutureDays = [
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

describe('FutureForecast', () => {
  test('renders forecast data', () => {
    render(
      <RecoilRoot>
        <FutureForecast
          blankDays={['day1', 'day2', 'day3', 'day4']}
          futureDays={fakeFutureDays}
        />
      </RecoilRoot>
    )
    expect(screen.findAllByRole('img')).toBeTruthy()
  })
})
