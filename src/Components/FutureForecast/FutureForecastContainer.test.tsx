import { render, screen } from '@testing-library/react'
import FutureForecastContainer from './FutureForecastContainer'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import { fakeForecast } from '.././../Data/FakeDataHelpers'

describe('FutureForecastContainer', () => {
  test('renders FutureForecast', () => {
    render(
      <RecoilRoot
        initializeState={(snap) => snap.set(atomForecast, fakeForecast)}
      >
        <FutureForecastContainer />
      </RecoilRoot>
    )
    expect(screen.findAllByRole('img')).toBeTruthy()
  })
})
