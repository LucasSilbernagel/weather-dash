import { Dispatch, SetStateAction } from 'react'
import UnitToggle from './UnitToggle'
import { TUnits } from '../../types'

interface IComponentProps {
  setUnits: Dispatch<SetStateAction<TUnits>>
  units: TUnits
}

const UnitToggleContainer = (props: IComponentProps) => {
  const { setUnits, units } = props

  /** Handle switching between Celsius and Fahrenheit */
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: TUnits
  ) => {
    setUnits(value)
  }

  return <UnitToggle handleChange={handleChange} units={units} />
}

export default UnitToggleContainer
