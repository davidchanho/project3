import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
        <Grid container direction='row' justify='center' alignItems='center'>
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
              ultrices gravida. Mi eget mauris pharetra et ultrices. Pulvinar
              elementum integer enim neque volutpat ac. Vitae tortor condimentum
              lacinia quis vel eros donec. Lectus arcu bibendum at varius vel
              pharetra. Lacus suspendisse faucibus interdum posuere lorem ipsum.
              Egestas purus viverra accumsan in. Elit sed vulputate mi sit amet
              mauris commodo quis. Proin nibh nisl condimentum id venenatis a
              condimentum vitae. Vitae purus faucibus ornare suspendisse.
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={6}
    >
      <Grid item>
        <Typography variant='h1'> Trend Health </Typography>
      </Grid>
      <Grid item>
        <Meeting />
      </Grid>
      <Grid item>
        <CardMedia src={devImg} component='img' title='meeting' />
      </Grid>
      <Grid item>
        <CardMedia src={moneyImg} component='img' title='meeting' />
      </Grid>
    </Grid>
  )
}
