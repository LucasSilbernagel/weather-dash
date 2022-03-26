import { useEffect, useState } from 'react'
import { digestWeatherData, digestGeocodingData } from '../Logic/LogicHelpers'
import { IDigestedGeocodingOption, EDefaultSelectedCity } from '../types'
import '../style.css'
import App from './App'
import { useSetRecoilState } from 'recoil'
import { atomForecast } from '../atoms'
import { getWeatherData, getGeocodingData } from '../Data/DataHelpers'

const AppContainer = () => {
  /** State setter to update the five-day weather forecast array */
  const setForecast = useSetRecoilState(atomForecast)
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

  /** If the user previously used the app to search for a city, display the forecast for that city when they return to the app */
  useEffect(() => {
    if (window.localStorage.savedCity) {
      setSelectedCity(JSON.parse(window.localStorage.savedCity))
    }
  }, [])

  /** Fetch options for the city select when the user searches for a city */
  useEffect(() => {
    if (searchedCity.length > 3) {
      setCityOptions([])
      setLoadingCityOptions(true)
      setTimeout(() => {
        getGeocodingData(searchedCity)
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
      getWeatherData(selectedCity, units)
        .then((response) => response.json())
        .then((data) => setForecast(digestWeatherData(data.daily.slice(0, 5))))
        .catch((err) => {
          console.error(err)
        })
    }, 500)
  }, [selectedCity, units, setForecast])

  return (
    <App
      setSearchedCity={setSearchedCity}
      cityOptions={cityOptions}
      loadingCityOptions={loadingCityOptions}
      setSelectedCity={setSelectedCity}
      selectedCity={selectedCity}
      units={units}
      setUnits={setUnits}
    />
  )
}

export default AppContainer
