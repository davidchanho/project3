import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { SignupForm } from 'components'
import AppBars from 'components/Menu/Drawer_Menu/AppBar'
import prospect from './img/ProspectsHero__1_.png'
import path from './img/path.png'
import track from './img/track.png'
import insight from './img/insight.png'

const useStyles = makeStyles(theme => ({
  view: {
    width: '100%',
  },
  img: {
    width: 550,
  },
  background: {
    width: '100%',
    height: 700,
    paddingTop: 150,
  },
  heading: {
    fontFamily: '"Times New Roman", Times, serif',
  },
  desc: {
    width: 600,
  },
  button: {
    color: '#007C89',
  },
  card: {
    width: 345,
    height: 320,
  },
  media: {
    height: 280,
  },
}))

export function LandingPage() {
  const classes = useStyles()

  function Meeting() {
    return (
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <Typography variant='h3' className={classes.heading}>
            Trade with confidence
          </Typography>
          <br />
          <Typography variant='h5' paragraph className={classes.desc}>
            Trend Health is the stock market trend monitoring system that you've
            been waiting for.
          </Typography>
          <br />
          <Grid item>
            <Button
              variant='outlined'
              className={classes.button}
              href='/Signup'
            >
              Signup
            </Button>
            <Button className={classes.button} href='/About'>
              Learn More
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <CardMedia
            src={prospect}
            component='img'
            title='meeting'
            className={classes.img}
          />
        </Grid>
      </Grid>
    )
  }
  function Dev() {
    return (
      <Grid
        container
        direction='row-reverse'
        alignItems='center'
        justify='center'
        spacing={6}
      >
        <Grid item>
          <Typography variant='h3' className={classes.heading}>
            Trade with confidence
          </Typography>
          <br />
          <Typography variant='h5' paragraph className={classes.desc}>
            Trend Health is the stock market trend monitoring system that you've
            been waiting for.
          </Typography>
          <br />
          <Grid item>
            <Button
              variant='outlined'
              className={classes.button}
              href='/Signup'
            >
              Signup
            </Button>
            <Button className={classes.button} href='/About'>
              Learn More
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Card style={{ height: 250, textAlign: 'center', width: 300 }}>
            <div className='card border-info mb-3'>
              <div className='card-header row'>
                <h1 style={{ margin: 'auto' }}>
                  TESLA
                  <br /> (TSLA)
                </h1>
              </div>
              <div className='card-body text-info'>
                <h1>
                  <div>{(0.97 * 100).toFixed(0)}%</div>
                </h1>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    )
  }
  function Why() {
    return (
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        spacing={3}
      >
        <Grid item className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={insight}
              style={{ backgroundColor: '#e2f3f5' }}
              title='Insight'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Insight
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={track}
              style={{ backgroundColor: '#fccde2' }}
              title='user friendly'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                User Friendly
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={path}
              style={{ backgroundColor: '#feff89' }}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Tailored to your Needs
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
    )
  }
  function Money() {
    return (
      <Grid container direction='column' alignItems='center' justify='center'>
        <Grid item>
          {/* <CardMedia component='img' title='money' className={classes.img} /> */}
        </Grid>
        <Grid item>
          <Typography paragraph>
            The goal of Trend Health is to be a place where Trend Followers can
            glance at a single page application and get a clean summary of the
            status of the market and their watchlist of stocks and sectors. It
            has been shown that the bulk of returns in the stock market are made
            over longer term holding periods. A Trend Follower with the
            knowledge that their portfolio holdings maintain positive scores is
            less likely to sell early in a bull market, and conversely just as
            likely to know when not to be holding at all. To become a Trend
            Follower, sign up below!
          </Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Container disableGutters='true' maxWidth='false'>
      <AppBars />
      <Grid container>
        <Grid
          item
          className={classes.background}
          style={{ backgroundColor: '#FFE01B' }}
        >
          <Meeting />
        </Grid>
        <Grid item className={classes.background}>
          <Why />
        </Grid>
        <Grid
          item
          className={classes.background}
          style={{ backgroundColor: '#FFE01B' }}
        >
          <Dev />
        </Grid>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='row'
          className={classes.background}
        >
          <Grid item>
            <Typography variant='h1'>Sign Up Today</Typography>
          </Grid>
          <Grid item>
            <SignupForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
