import { Grid, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Grid
      container
      item
      alignItems="center"
      sx={{ margin: '1em 0 1em 0' }}
      direction="column"
    >
      <Grid item sx={{ marginBottom: '1em' }}>
        <Typography>
          Built by{' '}
          <Link
            href="https://lucassilbernagel.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="#1F2020"
          >
            Lucas Silbernagel
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          API:{' '}
          <Link
            href="https://openweathermap.org/api"
            target="_blank"
            rel="noopener noreferrer"
            color="#1F2020"
          >
            OpenWeatherMap
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
