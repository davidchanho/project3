import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import CardActions from '@material-ui/core/CardActions'
import ClearIcon from '@material-ui/icons/Clear'

export const TrendCard = props => {
  const classes = useStyles()
  const { sector, onDelete } = props

  return (
   <Card className={classes.root}>
      <div className="card border-info mb-3">
        <div className="card-header row">
          <CardActions className="col-lg-12">
            <ClearIcon className='close' onClick={() => onDelete(sector.id)} />
            {/* <InfoIcon /> */}
          </CardActions>
          <h1 style={{margin:"auto"}}>
            {sector.sectorName} (${sector.symbol})
          </h1>
         </div>
        <div className="card-body text-info">
          <h1><div>{(sector.score*100).toFixed(0)}%</div></h1>
        </div>
      </div>
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
