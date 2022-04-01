import { render, screen } from '@testing-library/react'
import CitySelect from './CitySelect'

describe('CitySelect', () => {
  test('renders', async () => {
    render(
      <CitySelect
        handleDropdownChange={() => null}
        handleInputChange={() => null}
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
