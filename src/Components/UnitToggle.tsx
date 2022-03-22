import { Dispatch, SetStateAction } from 'react'
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material'

interface IComponentProps {
  setUnits: Dispatch<SetStateAction<string>>
  units: string
}

const UnitToggle = (props: IComponentProps) => {
  const { setUnits, units } = props

  const theme = useTheme()
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setUnits(value)
  }

  return (
    <Grid container item justifyContent={largeScreen ? 'flex-end' : 'center'}>
      <ToggleButtonGroup
        value={units}
        exclusive
        onChange={handleChange}
        aria-label="units"
      >
        <ToggleButton value="metric" aria-label="Celsius">
          Celsius
        </ToggleButton>
        <ToggleButton value="imperial" aria-label="Fahrenheit">
          Fahrenheit
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  )
}

export default UnitToggle
