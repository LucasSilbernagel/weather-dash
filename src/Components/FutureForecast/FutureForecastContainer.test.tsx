import { render, screen } from '@testing-library/react'
import FutureForecastContainer from './FutureForecastContainer'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'

describe('FutureForecastContainer', () => {
  test('renders FutureForecast', () => {
    render(
      <RecoilRoot
        initializeState={(snap) =>
          snap.set(atomForecast, [
            {
              day: 'Thu',
              dayId: 0,
              maxTemp: 7,
              minTemp: 1,
              weather: 'light snow',
              weatherId: 600,
            },
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
          ])
        }
      >
        <FutureForecastContainer />
      </RecoilRoot>
    )
    expect(screen.findAllByRole('img')).toBeTruthy()
  })
})
