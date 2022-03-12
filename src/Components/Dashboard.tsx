import { Grid, Paper, Typography } from '@mui/material'
import { BsClouds } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <Grid container item justifyContent="center" sx={{ marginTop: '1em' }}>
      <Paper
        sx={{
          padding: '0.25em',
          width: '100%',
          maxWidth: '800px',
          borderRadius: '15px',
        }}
        elevation={3}
      >
        <Grid container item direction="column">
          <Grid
            item
            lg={12}
            sx={{
              background: '#EEF6FB',
              padding: '2em',
              borderRadius: '15px 15px 0 0',
              border: '0.25em #FFFFFF solid',
            }}
          >
            <Grid container item direction="column">
              <Grid container item justifyContent="center">
                <Grid item>
                  <Typography variant="h4" sx={{ fontWeight: 'light' }}>
                    Today
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item container lg={3} justifyContent="center">
                  <BsClouds style={{ fontSize: '10rem', color: '#30456A' }} />
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  lg={2}
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '4rem',
                        fontFamily: 'Coda',
                      }}
                    >
                      19°
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '2rem', fontWeight: 'light' }}>
                      Clouds
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                borderRadius: '0 0 0 15px',
                padding: '1em',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                    Wed
                  </Typography>
                </Grid>
                <Grid item>
                  <BsClouds style={{ fontSize: '4rem', color: '#30456A' }} />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      fontFamily: 'Coda',
                    }}
                  >
                    19°
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                padding: '1em',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                    Thu
                  </Typography>
                </Grid>
                <Grid item>
                  <BsClouds style={{ fontSize: '4rem', color: '#30456A' }} />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      fontFamily: 'Coda',
                    }}
                  >
                    19°
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                padding: '1em',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                    Fri
                  </Typography>
                </Grid>
                <Grid item>
                  <BsClouds style={{ fontSize: '4rem', color: '#30456A' }} />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      fontFamily: 'Coda',
                    }}
                  >
                    19°
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={3}
              sx={{
                background: '#EEF6FB',
                borderRadius: '0 0 15px 0',
                padding: '1em',
                border: '0.25em #FFFFFF solid',
              }}
            >
              <Grid container item direction="column" alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: '1.5em', fontWeight: 'light' }}>
                    Sat
                  </Typography>
                </Grid>
                <Grid item>
                  <BsClouds style={{ fontSize: '4rem', color: '#30456A' }} />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      fontFamily: 'Coda',
                    }}
                  >
                    19°
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Dashboard
