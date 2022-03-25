import { MouseEvent } from 'react'
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material'

interface IComponentProps {
  units: string
  handleChange: (event: MouseEvent<HTMLElement>, value: string) => void
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
