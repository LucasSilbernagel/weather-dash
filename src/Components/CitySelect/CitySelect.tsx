import { SyntheticEvent } from 'react'
import { Grid, TextField, Autocomplete } from '@mui/material'
import { IDigestedGeocodingOption } from '../../types'

interface IComponentProps {
  cityOptions: Array<IDigestedGeocodingOption>
  loadingCityOptions: boolean
  selectedCity: IDigestedGeocodingOption
  handleDropdownChange: (
    event: SyntheticEvent<Element, Event>,
    value: IDigestedGeocodingOption | null
  ) => void
  handleInputChange: (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => void
}

const CitySelect = (props: IComponentProps) => {
  const {
    cityOptions,
    loadingCityOptions,
    selectedCity,
    handleDropdownChange,
    handleInputChange,
  } = props

  return (
    <Grid container item>
      <Grid item xs={12}>
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
          renderOption={(renderProps, option) => {
            if (option.state.length > 0) {
              return (
                <li {...renderProps} key={option.id}>
                  {`${option.cityName}, ${option.state}, ${option.country}`}
                </li>
              )
            } else {
              return (
                <li {...renderProps} key={option.id}>
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
