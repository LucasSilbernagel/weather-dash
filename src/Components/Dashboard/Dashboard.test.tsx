import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import { fakeForecast } from '../../Data/FakeDataHelpers'

describe('Dashboard', () => {
  test('renders', () => {
    render(
      <RecoilRoot
        initializeState={(snap) => snap.set(atomForecast, fakeForecast)}
      >
        <Dashboard />
      </RecoilRoot>
    )
    expect(screen.getByText('Today')).toBeTruthy()
    expect(screen.findAllByRole('img')).toBeTruthy()
  })
})
