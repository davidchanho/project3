import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.scss'

// export const CircleBar = props => (
//   <div
//     data-preset='circle'
//     className='ldBar label-center'
//     data-value={props.health}
//   />
// )

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  }
}))

export function CircleBar(props) {
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted =>
        prevCompleted >= 100 ? 0 : prevCompleted + 10
      )
    }

    const timer = setInterval(progress, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.root}>
      <CircularProgress variant='static' value={props.health} />
    </div>
  )
}
