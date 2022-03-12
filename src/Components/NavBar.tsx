import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { Grid, Button } from '@mui/material'

interface IComponentProps {
  selectedCity: string
  setSelectedCity: Dispatch<SetStateAction<string>>
}

const NavBar = (props: IComponentProps) => {
  const { selectedCity, setSelectedCity } = props

  const navBarLabels = ['Ottawa', 'Moscow', 'Tokyo']

  const handleClick = (event: BaseSyntheticEvent) => {
    setSelectedCity(event.currentTarget.value)
  }

  return (
    <Grid
      container
      item
      sx={{
        background: '#eef6fb',
        justifyContent: 'center',
      }}
    >
      {navBarLabels.map((label, index) => {
        return (
          <Grid container item key={index} justifyContent="center" lg={2}>
            <Button
              onClick={handleClick}
              value={label}
              sx={{
                fontSize: '2rem',
                fontWeight: label === selectedCity ? 'bold' : 'normal',
                color: label === selectedCity ? '#60B0E8' : '#333339',
              }}
            >
              {label}
            </Button>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default NavBar
