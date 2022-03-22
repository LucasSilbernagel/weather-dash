import { useEffect, useState } from 'react'
import { Grid, CssBaseline, useMediaQuery, useTheme } from '@mui/material'
import Dashboard from './Components/Dashboard'
import { digestWeatherData, digestGeocodingData } from './LogicHelpers'
import {
  IDigestedWeatherDay,
  IDigestedGeocodingOption,
  EDefaultSelectedCity,
} from './types'
import Footer from './Components/Footer'
import CitySelect from './Components/CitySelect'
import UnitToggle from './Components/UnitToggle'
import './style.css'

const App = () => {
  /** Array containing a five-day weather forecast for the selected city */
  const [forecast, setForecast] = useState<IDigestedWeatherDay[]>([])
  /** City name that the user has typed in the city select */
  const [searchedCity, setSearchedCity] = useState('')
  /** Array of options for the city select, based on the user's search */
  const [cityOptions, setCityOptions] = useState<IDigestedGeocodingOption[]>([])
  /** Boolean to determine whether options are loading for the city select */
  const [loadingCityOptions, setLoadingCityOptions] = useState(false)
  /** Selected city to display weather forecast */
  const [selectedCity, setSelectedCity] =
    useState<IDigestedGeocodingOption>(EDefaultSelectedCity)
  /** Whether temperatures are displayed in metric or imperial units */
  const [units, setUnits] = useState('metric')

  const theme = useTheme()
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))

  /** Fetch options for the city select when the user searches for a city */
  useEffect(() => {
    if (searchedCity.length > 3) {
      setCityOptions([])
      setLoadingCityOptions(true)
      setTimeout(() => {
        fetch(
          `https://api.openweathermap.org/geo/1.0/direct?appid=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchedCity}&limit=3`
        )
          .then((response) => response.json())
          .then((data) => {
            setCityOptions(digestGeocodingData(data))
            setLoadingCityOptions(false)
          })
          .catch((err) => {
            console.error(err)
          })
      }, 500)
    }
  }, [searchedCity])

  /** Fetch weather forecast data from the weather API when a city is selected */
  useEffect(() => {
    setForecast([])
    setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&exclude=minutely,hourly,alerts&units=${units}`
      )
        .then((response) => response.json())
        .then((data) => setForecast(digestWeatherData(data.daily.slice(0, 5))))
        .catch((err) => {
          console.error(err)
        })
    }, 500)
  }, [selectedCity, units])

  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="column"
        sx={{
          background: '#eef6fb',
          paddingTop: '2em',
        }}
      >
        <Grid container item justifyContent="center">
          <Grid container item xl={6} lg={7} md={6} sm={7} xs={11}>
            <Grid
              item
              container
              justifyContent="space-between"
              direction={largeScreen ? 'row' : 'column'}
              alignItems="center"
              spacing={largeScreen ? undefined : 2}
            >
              <Grid item container lg={5} md={4} sm={6}>
                <CitySelect
                  setSearchedCity={setSearchedCity}
                  cityOptions={cityOptions}
                  loadingCityOptions={loadingCityOptions}
                  setSelectedCity={setSelectedCity}
                  selectedCity={selectedCity}
                />
              </Grid>
              <Grid item container lg={2}>
                <UnitToggle units={units} setUnits={setUnits} />
              </Grid>
            </Grid>
            <Dashboard forecast={forecast} />
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App
