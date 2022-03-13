import { useEffect, useState } from 'react'
import { Grid, CssBaseline } from '@mui/material'
import './style.css'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import { digestWeatherData } from './LogicHelpers'
import { IDigestedWeatherDay } from './types'
import { cities } from './constants'
import Footer from './Components/Footer'

const App = () => {
  /** Selected city to display weather forecast */
  const [selectedCity, setSelectedCity] = useState('Ottawa')
  /** Array containing a five-day weather forecast for the selected city */
  const [forecast, setForecast] = useState<IDigestedWeatherDay[]>([])

  /** Fetch weather forecast data from the weather API when a city is selected */
  useEffect(() => {
    setForecast([])
    setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[selectedCity].lat}&lon=${cities[selectedCity].lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setForecast(digestWeatherData(data.daily.slice(0, 5))))
        .catch((err) => {
          console.error(err)
        })
    }, 500)
  }, [selectedCity])

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
        <NavBar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        <Dashboard forecast={forecast} />
        <Footer />
      </Grid>
    </>
  )
}

export default App
