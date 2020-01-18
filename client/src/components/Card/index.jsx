import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import InfoIcon from '@material-ui/icons/Info'
import { CircleBar } from './CircleBar'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    textAlign: 'center',
    margin: 20
  },
  title: {
    fontSize: 28
  }
})

export const TrendCard = props => {
  const classes = useStyles()
  const { test } = props

  return (
    <Card key={test.id} className={classes.card}>
      <CardActions>
        <ClearIcon
          className='close'
          onClick={() => props.onDelete(test)}
          color='action'
        />
        <InfoIcon />
      </CardActions>
      <CardContent>
        <Typography className={classes.title}>{test.Company}</Typography>
        <Typography>({test.Stock})</Typography>
        <CircleBar health={test.Health} />
      </CardContent>
    </Card>
  )
}
