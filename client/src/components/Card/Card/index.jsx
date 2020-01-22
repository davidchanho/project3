import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import InfoIcon from '@material-ui/icons/Info'
import { CircleBar } from '../CircleBar'

export const TrendCard = props => {
  const classes = useStyles()
  const { test, onDelete } = props

  return (
    <Card className={classes.root}>
      <CardActions>
        <ClearIcon className='close' onClick={() => onDelete(test.id)} />
        <InfoIcon />
      </CardActions>
      <Card.Body>
        <Typography>{test.Company}</Typography>
        <Typography>({test.Stock})</Typography>
        <CircleBar health={test.Health} />
      </Card.Body>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
    textAlign: 'center',
    height: 250
  }
}))
