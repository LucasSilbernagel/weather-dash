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
    expect(screen.getByText('Celsius'))
    expect(screen.getByText('Fahrenheit'))
    expect(screen.getByText('Built by'))
    expect(screen.getByText('Lucas Silbernagel'))
    expect(screen.getByText('API:'))
    expect(screen.getByText('OpenWeatherMap'))
  })
})
