import { Dispatch, SetStateAction, SyntheticEvent } from 'react'
import { EDefaultSelectedCity, IDigestedGeocodingOption } from '../../types'
import CitySelect from './CitySelect'

interface IComponentProps {
  setSearchedCity: Dispatch<SetStateAction<string>>
  cityOptions: Array<IDigestedGeocodingOption>
  loadingCityOptions: boolean
  setSelectedCity: Dispatch<SetStateAction<IDigestedGeocodingOption>>
  selectedCity: IDigestedGeocodingOption
}

const CitySelectContainer = (props: IComponentProps) => {
  const {
    setSearchedCity,
    cityOptions,
    loadingCityOptions,
    setSelectedCity,
    selectedCity,
  } = props

  /** Fires when the user types in the autocomplete */
  const handleInputChange = (
    _event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSearchedCity(value)
  }

  /** Fires when the user selects an option from the autocomplete */
  const handleDropdownChange = (
    _event: SyntheticEvent<Element, Event>,
    value: IDigestedGeocodingOption | null
  ) => {
    if (value) {
      setSelectedCity(value)
      window.localStorage.setItem('savedCity', JSON.stringify(value))
    } else {
      setSelectedCity(EDefaultSelectedCity)
    }
  }

  return (
    <CitySelect
      selectedCity={selectedCity}
      cityOptions={cityOptions}
      loadingCityOptions={loadingCityOptions}
      handleDropdownChange={handleDropdownChange}
      handleInputChange={handleInputChange}
    />
  )
}

export default CitySelectContainer
