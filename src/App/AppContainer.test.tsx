import { render, screen } from '@testing-library/react'
import AppContainer from './AppContainer'
import { RecoilRoot } from 'recoil'

describe('AppContainer', () => {
  test('renders App component', async () => {
    render(
      <RecoilRoot>
        <AppContainer />
      </RecoilRoot>
    )
    expect(screen.getByLabelText(/City/)).toBeInTheDocument()
    expect(screen.getByText('Celsius')).toBeTruthy()
    expect(screen.getByText('Fahrenheit')).toBeTruthy()
    expect(screen.getByText('Built by')).toBeTruthy()
    expect(screen.getByText('Lucas Silbernagel')).toBeTruthy()
    expect(screen.getByText('API:')).toBeTruthy()
    expect(screen.getByText('OpenWeatherMap')).toBeTruthy()
  })
})
