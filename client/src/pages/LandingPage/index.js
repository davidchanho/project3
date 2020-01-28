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
import user from './img/user.png'
import signup from './img/signup.png'
import insight from './img/insight.png'

const useStyles = makeStyles(theme => ({
  img: {
    width: 550,
  },
  background: {
    width: '100%',
    height: 1000,
    padding: 150,
  },
  heading: {
    fontFamily: '"Times New Roman", Times, serif',
  },
  desc: {
    width: 600,
  },
  button: {
    color: '#007C89',
    marginRight: 10,
  },
  card: {
    width: 500,
    textAlign: 'center',
    height: 500,
  },
  media: {
    height: 280,
    padding: 200,
  },
}))

export function LandingPage() {
  const classes = useStyles()

  function Meeting() {
    return (
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <Typography variant='h3' className={classes.heading}>
            Trade with Confidence
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
          <Typography variant='h5' paragraph className={classes.desc}>
            Trend Health is where Trend Followers can get a clean summary of the
            states of the trends of their favorite stocks, and the markets most
            influential sectors.
          </Typography>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <div className='card border-info mb-3'>
              <div className='card-header row'>
                <h1 style={{ margin: 'auto' }}>
                  NASDAQ
                  <br /> (QQQ)
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
        spacing={2}
      >
        <Grid item className={classes.card}>
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
            {/* <Typography variant='body2' color='textSecondary' component='p'>
              Derive a single trend score
            </Typography> */}
          </CardContent>
        </Grid>
        <Grid item className={classes.card}>
          <CardMedia
            className={classes.media}
            image={user}
            style={{ backgroundColor: '#fccde2' }}
            title='user friendly'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              User Friendly
            </Typography>
            {/* <Typography variant='body2' color='textSecondary' component='p'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </Grid>
        <Grid item className={classes.card}>
          <CardMedia
            className={classes.media}
            image={path}
            style={{ backgroundColor: '#feff89' }}
            title='Customizable'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Customizable
            </Typography>
            {/* <Typography variant='body2' color='textSecondary' component='p'>
              User-Defined Weightings
            </Typography> */}
          </CardContent>
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
          justify='center'
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
          justify='center'
          className={classes.background}
          style={{ backgroundColor: '#c5e3f6' }}
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
            <CardMedia
              src={signup}
              component='img'
              title='meeting'
              className={classes.img}
            />
          </Grid>
          <Grid item>
            <SignupForm />
          </Grid>
          <Grid item>
            <Typography paragraph align='right'>
              “Watch the Market leaders, the stocks that have led the charge
              upward in a bull market [...] as the leaders go, so goes the
              entire market.”
              <br />- Jesse Livermore
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
