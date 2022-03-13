import { Grid, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Grid container item justifyContent="center" sx={{ margin: '1em 0 1em 0' }}>
      <Grid item>
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
    </Grid>
  )
}

export default Footer
