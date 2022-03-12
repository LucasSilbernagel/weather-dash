import { useEffect, useState } from 'react'
import { Grid, CssBaseline } from '@mui/material'
import './style.css'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import { digestWeatherData } from './LogicHelpers'
import { IDigestedWeatherDay } from './types'
import { cities } from './constants'

const App = () => {
  const [selectedCity, setSelectedCity] = useState('Ottawa')
  const [forecast, setForecast] = useState<IDigestedWeatherDay[]>([])

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[selectedCity].lat}&lon=${cities[selectedCity].lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setForecast(digestWeatherData(data.daily.slice(0, 5))))
      .catch((err) => {
        console.error(err)
      })
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
      </Grid>
    </>
  )
}

export default App
