import { render, screen } from '@testing-library/react'
import TodayForecast from './TodayForecast'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'

describe('TodayForecast', () => {
  test('renders skeleton', () => {
    render(
      <RecoilRoot
        initializeState={(snap) =>
          snap.set(atomForecast, [
            {
              day: 'Sat',
              minTemp: -5,
              maxTemp: 5,
              weather: 'broken clouds',
              weatherId: 200,
              dayId: 0,
            },
          ])
        }
      >
        <TodayForecast />
      </RecoilRoot>
    )
    expect(screen.getByText('Today')).toBeTruthy()
  })
})
