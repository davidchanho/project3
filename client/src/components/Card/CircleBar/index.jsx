import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export const CircleBar = props => {
  const classes = useStyles()

  return (
    <div
      data-preset='circle'
      className={`${classes.circleBar} ldBar`}
      data-value={props.health}
    />
  )
}

const useStyles = makeStyles(theme => ({
  circleBar: {
    margin: 'auto'
  }
}))
