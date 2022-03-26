import { Dispatch, SetStateAction } from 'react'
import { Grid, CssBaseline, useMediaQuery, useTheme } from '@mui/material'
import Dashboard from '../Components/Dashboard'
import { IDigestedGeocodingOption, TUnits } from '../types'
import Footer from '../Components/Footer'
import CitySelectContainer from '../Components/CitySelect/CitySelectContainer'
import UnitToggleContainer from '../Components/UnitToggle/UnitToggleContainer'
import '../style.css'

interface IComponentProps {
  setSearchedCity: Dispatch<SetStateAction<string>>
  cityOptions: Array<IDigestedGeocodingOption>
  loadingCityOptions: boolean
  setSelectedCity: Dispatch<SetStateAction<IDigestedGeocodingOption>>
  selectedCity: IDigestedGeocodingOption
  setUnits: Dispatch<SetStateAction<TUnits>>
  units: TUnits
}

const App = (props: IComponentProps) => {
  const {
    setSearchedCity,
    cityOptions,
    loadingCityOptions,
    setSelectedCity,
    selectedCity,
    units,
    setUnits,
  } = props

  const theme = useTheme()
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))

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
                <CitySelectContainer
                  setSearchedCity={setSearchedCity}
                  cityOptions={cityOptions}
                  loadingCityOptions={loadingCityOptions}
                  setSelectedCity={setSelectedCity}
                  selectedCity={selectedCity}
                />
              </Grid>
              <Grid item container lg={2}>
                <UnitToggleContainer units={units} setUnits={setUnits} />
              </Grid>
            </Grid>
            <Dashboard />
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App
