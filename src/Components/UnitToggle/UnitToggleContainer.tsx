import { Dispatch, SetStateAction } from 'react'
import UnitToggle from './UnitToggle'

interface IComponentProps {
  setUnits: Dispatch<SetStateAction<string>>
  units: string
}

const UnitToggleContainer = (props: IComponentProps) => {
  const { setUnits, units } = props

  /** Handle switching between Celsius and Fahrenheit */
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setUnits(value)
  }

  return <UnitToggle handleChange={handleChange} units={units} />
}

export default UnitToggleContainer
