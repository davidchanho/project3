import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import meetingImg from './img/Meeting.png'
import moneyImg from './img/money.png'
import devImg from './img/dev.png'

export function LandingPage() {
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
        <CardMedia src={meetingImg} component='img' title='meeting' />
      </Grid>
      <Grid item>
        <CardMedia src={moneyImg} component='img' title='meeting' />
      </Grid>
      <Grid item>
        <CardMedia src={devImg} component='img' title='meeting' />
      </Grid>
    </Grid>
  )
}
