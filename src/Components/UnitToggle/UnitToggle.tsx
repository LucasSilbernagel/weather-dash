import { MouseEvent } from 'react'
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { TUnits } from '../../types'

interface IComponentProps {
  units: TUnits
  handleChange: (event: MouseEvent<HTMLElement>, value: TUnits) => void
}

const UnitToggle = (props: IComponentProps) => {
  const { units, handleChange } = props

  const theme = useTheme()
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))

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
