import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Logo } from 'components'

export default function Brand() {
  const classes = useStyles()
  return (
    <Grid container direction='row' justify='flex-start' alignItems='center'>
      <Grid item className={classes.logo}>
        <Logo />
      </Grid>
      <Grid item>
        <Typography variant='h6' noWrap>
          Trend Health
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  logo: {
    width: 40,
    marginRight: 5,
  },
}))
