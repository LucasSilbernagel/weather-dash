import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'
import { RecoilRoot } from 'recoil'

describe('Dashboard', () => {
  test('renders', () => {
    render(
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    )
    expect(screen.getByTestId('0-skeleton')).toBeTruthy()
  })
})
