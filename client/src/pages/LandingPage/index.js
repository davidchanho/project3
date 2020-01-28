import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { SignupForm } from 'components'
import meetingImg from './img/Meeting.png'
import moneyImg from './img/money.png'
import devImg from './img/dev.png'
import waves from './img/wave.svg'

export function LandingPage() {
  function Dev() {
    return (
      <>
        <Grid container direction='row'>
          <Grid item>
            <CardMedia src={devImg} component='img' title='dev' />
          </Grid>
          <Grid item>
            <Typography paragraph>
            We understand that investing can be challenging. With tens of thousands of stocks to choose from, how can you decide which
             stocks are primed for future growth and which to stay away from? Then, how do you pick the ‘right’ time to buy (or sell) your 
             stocks? We want to help you streamline the process of deciding when is the best time to buy and sell stocks.  For a simpler 
             approach to stock market analysis, Trend Health is here to help!
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
             The goal of Trend Health is to be a place where Trend Followers can glance at a single page application and get a clean summary
             of the status of the market and their watchlist of stocks and sectors. It has been shown that the bulk of returns in the stock 
             market are made over longer term holding periods. A Trend Follower with the knowledge that their portfolio holdings maintain 
             positive scores is less likely to sell early in a bull market, and conversely just as likely to know when not to be holding at
             all. To become a Trend Follower, sign up below!
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <Grid container direction='column' spacing={6}>
      <Grid item justify='center' style={{ backgroundColor: '#0099ff' }}>
        <Typography variant='h1'> Trend Health </Typography>
        <Typography variant='h3'> What is Trend Health? </Typography>
        <CardMedia src={meetingImg} component='img' title='meeting' />
        <Typography paragraph>
          Trend Health is a stock market trend monitoring system that applies
          user-defined weightings to a combination of customizable technical
          indicators in order to derive a single trend score.
        </Typography>
      </Grid>
      <CardMedia src={waves} component='img' />
      <Grid item>
        <Dev />
      </Grid>
      <Grid item>
        <Money />
      </Grid>
      <Grid item>
        <SignupForm />
      </Grid>
    </Grid>
  )
}
