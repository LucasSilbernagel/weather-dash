import { render, screen } from '@testing-library/react'
import App from './App'
import { RecoilRoot } from 'recoil'

describe('App', () => {
  test('renders', async () => {
    render(
      <RecoilRoot>
        <App
          setSearchedCity={() => null}
          setSelectedCity={() => null}
          setUnits={() => null}
          units={'metric'}
          selectedCity={{
            cityName: 'Toronto',
            state: 'Ontario',
            country: 'Canada',
            id: 0,
            latitude: 43.65107,
            longitude: -79.347015,
          }}
          cityOptions={[]}
          loadingCityOptions={false}
        />
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
