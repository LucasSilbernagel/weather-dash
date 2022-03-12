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
