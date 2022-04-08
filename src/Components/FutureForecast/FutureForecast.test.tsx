import { render, screen } from '@testing-library/react'
import FutureForecast from './FutureForecast'
import { RecoilRoot } from 'recoil'
import { fakeForecast } from '../../Data/FakeDataHelpers'

describe('FutureForecast', () => {
  test('renders forecast data', () => {
    render(
      <RecoilRoot>
        <FutureForecast
          blankDays={['day1', 'day2', 'day3', 'day4']}
          futureDays={fakeForecast.splice(1)}
        />
      </RecoilRoot>
    )
    expect(screen.findAllByRole('img')).toBeTruthy()
  })
})
