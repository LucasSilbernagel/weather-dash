import { render, screen } from '@testing-library/react'
import TodayForecast from './TodayForecast'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import { fakeForecast } from '../../Data/FakeDataHelpers'

describe('TodayForecast', () => {
  test('renders skeleton', () => {
    render(
      <RecoilRoot
        initializeState={(snap) => snap.set(atomForecast, [fakeForecast[0]])}
      >
        <TodayForecast />
      </RecoilRoot>
    )
    expect(screen.getByText('Today')).toBeTruthy()
  })
})
