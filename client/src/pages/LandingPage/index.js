import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import meetingImg from './img/Meeting.png'
import moneyImg from './img/money.png'
import devImg from './img/dev.png'

export function LandingPage() {
  function Meeting() {
    return (
      <>
        <Grid container direction='row'>
          <Grid item>
            <CardMedia src={meetingImg} component='img' title='meeting' />
          </Grid>
          <Grid item>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              cras pulvinar mattis nunc. Est placerat in egestas erat imperdiet
              sed euismod nisi porta. Eget dolor morbi non arcu. Ultrices
              tincidunt arcu non sodales neque sodales. Quis ipsum suspendisse
              ultrices gravida. Mi eget mauris pharetra et ultrices.
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  }
  function Dev() {
    return (
      <>
        <Grid container direction='row'>
          <Grid item>
            <CardMedia src={devImg} component='img' title='dev' />
          </Grid>
          <Grid item>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              cras pulvinar mattis nunc. Est placerat in egestas erat imperdiet
              sed euismod nisi porta. Eget dolor morbi non arcu. Ultrices
              tincidunt arcu non sodales neque sodales. Quis ipsum suspendisse
              ultrices gravida. Mi eget mauris pharetra et ultrices.
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  }
  function Money() {
    return (
      <>
        <Grid container direction='row'>
          <Grid item>
            <CardMedia src={moneyImg} component='img' title='money' />
          </Grid>
          <Grid item>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              cras pulvinar mattis nunc. Est placerat in egestas erat imperdiet
              sed euismod nisi porta. Eget dolor morbi non arcu. Ultrices
              tincidunt arcu non sodales neque sodales. Quis ipsum suspendisse
              ultrices gravida. Mi eget mauris pharetra et ultrices.
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <Grid container direction='column' spacing={6}>
      <Grid item>
        <Typography variant='h1'> Trend Health </Typography>
      </Grid>
      <Grid item>
        <Meeting />
      </Grid>
      <Grid item>
        <Dev />
      </Grid>
      <Grid item>
        <Money />
      </Grid>
    </Grid>
  )
}
