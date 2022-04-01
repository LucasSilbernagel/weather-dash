import { render, screen } from '@testing-library/react'
import CitySelectContainer from './CitySelectContainer'

describe('CitySelectContainer', () => {
  test('renders CitySelect', async () => {
    render(
      <CitySelectContainer
        setSearchedCity={() => null}
        setSelectedCity={() => null}
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
    )
    expect(screen.getByLabelText(/City/)).toBeInTheDocument()
  })
})
