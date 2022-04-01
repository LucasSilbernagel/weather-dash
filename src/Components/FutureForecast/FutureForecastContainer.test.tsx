import { render, screen } from '@testing-library/react'
import FutureForecastContainer from './FutureForecastContainer'
import { RecoilRoot } from 'recoil'

describe('FutureForecastContainer', () => {
  test('renders FutureForecast', () => {
    render(
      <RecoilRoot>
        <FutureForecastContainer />
      </RecoilRoot>
    )
    expect(screen.getByTestId('0-skeleton')).toBeInTheDocument()
  })
})
