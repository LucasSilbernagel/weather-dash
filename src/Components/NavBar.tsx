import { BaseSyntheticEvent } from 'react'
import { Grid, Button } from '@mui/material'
import { useState } from 'react'

const NavBar = () => {
  const [city, setCity] = useState('Ottawa')

  const navBarLabels = ['Ottawa', 'Moscow', 'Tokyo']

  const handleClick = (event: BaseSyntheticEvent) => {
    setCity(event.currentTarget.value)
  }

  return (
    <Grid
      container
      item
      lg={5}
      sx={{
        background: '#eef6fb',
        justifyContent: 'space-between',
      }}
    >
      {navBarLabels.map((label, index) => {
        return (
          <Grid item key={index}>
            <Button
              onClick={handleClick}
              value={label}
              sx={{
                fontSize: '2rem',
                fontWeight: label === city ? 'bold' : 'normal',
                color: label === city ? '#60B0E8' : '#333339',
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
