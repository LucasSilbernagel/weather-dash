import { Dispatch, SetStateAction, SyntheticEvent } from 'react'
import { Grid, TextField, Autocomplete } from '@mui/material'
import { EDefaultSelectedCity, IDigestedGeocodingOption } from '../types'

interface IComponentProps {
  setSearchedCity: Dispatch<SetStateAction<string>>
  cityOptions: Array<IDigestedGeocodingOption>
  loadingCityOptions: boolean
  setSelectedCity: Dispatch<SetStateAction<IDigestedGeocodingOption>>
  selectedCity: IDigestedGeocodingOption
}

const CitySelect = (props: IComponentProps) => {
  const {
    setSearchedCity,
    cityOptions,
    loadingCityOptions,
    setSelectedCity,
    selectedCity,
  } = props

  const handleInputChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSearchedCity(value)
  }

  const handleDropdownChange = (
    event: SyntheticEvent<Element, Event>,
    value: IDigestedGeocodingOption | null
  ) => {
    if (value) {
      setSelectedCity(value)
    } else {
      setSelectedCity(EDefaultSelectedCity)
    }
  }

  return (
    <Grid
      container
      item
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid container item justifyContent="center" lg={3} md={4} sm={6} xs={10}>
        <Autocomplete
          id="citySelect"
          value={selectedCity}
          sx={{ width: '100%' }}
          options={cityOptions}
          getOptionLabel={(option) =>
            option.state.length > 0
              ? `${option.cityName}, ${option.state}, ${option.country}`
              : `${option.cityName}, ${option.country}`
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          loading={loadingCityOptions}
          onChange={handleDropdownChange}
          onInputChange={handleInputChange}
          renderOption={(props, option) => {
            if (option.state.length > 0) {
              return (
                <li {...props} key={option.id}>
                  {`${option.cityName}, ${option.state}, ${option.country}`}
                </li>
              )
            } else {
              return (
                <li {...props} key={option.id}>
                  {`${option.cityName}, ${option.country}`}
                </li>
              )
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="City"
              placeholder="Search cities..."
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  )
}

export default CitySelect
