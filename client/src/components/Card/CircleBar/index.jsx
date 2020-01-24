import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export const CircleBar = props => {
  const classes = useStyles()

  return (
    <div
      data-preset='circle'
      className={`${classes.circleBar} ldBar label-center`}
      // data-value={(props.health * 100).toFixed(0)}
      data-value={50}
    />
  )
}

const useStyles = makeStyles(theme => ({
  circleBar: {
    margin: 'auto',
    width: '50%'
  }
}))
