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
  const { sector, onDelete } = props
  
  console.log(sector.score)

  return (
    <Card className={classes.root}>
      <CardActions>
        <ClearIcon className='close' onClick={() => onDelete(sector.id)} />
        <InfoIcon />
      </CardActions>
      <Card.Body>
      <Typography>"test"</Typography>
        <Typography>{sector.symbol}</Typography>
        <h1><div>{(sector.score*100).toFixed(0)}</div></h1>
        <CircleBar health={sector.score} />
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
