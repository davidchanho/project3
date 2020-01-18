import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  }
}))

export function CircleBar(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress
        variant='static'
        value={props.health}
        label={props.health}
      />
    </div>
  )
}
