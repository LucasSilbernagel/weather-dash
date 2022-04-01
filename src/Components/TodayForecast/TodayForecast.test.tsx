import { render, screen } from '@testing-library/react'
import TodayForecast from './TodayForecast'
import { RecoilRoot } from 'recoil'

describe('TodayForecast', () => {
  test('renders skeleton', () => {
    render(
      <RecoilRoot>
        <TodayForecast />
      </RecoilRoot>
    )
    expect(screen.getByTestId('todaySkeleton')).toBeTruthy()
  })
})
