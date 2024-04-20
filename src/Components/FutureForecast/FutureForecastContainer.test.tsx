import { render, screen } from '@testing-library/react'
import FutureForecastContainer from './FutureForecastContainer'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import { fakeForecast } from '.././../Data/FakeDataHelpers'

describe('FutureForecastContainer', () => {
  test('renders FutureForecast', async () => {
    render(
      <RecoilRoot
        initializeState={(snap) => snap.set(atomForecast, fakeForecast)}
      >
        <FutureForecastContainer />
      </RecoilRoot>
    )
    expect(await screen.findAllByRole('img')).toBeTruthy()
  })
})
