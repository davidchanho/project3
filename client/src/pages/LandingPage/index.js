import React from 'react'
import Grid from '@material-ui/core/Grid'
import meetingImg from 'Meeting.png'

export function LandingPage() {
  return (
    <Grid container>
      <Grid item>
        <Card>
          <CardMedia
            // className={classes.media}
            image={meetingImg}
            // title='Paella dish'
          />
        </Card>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  )
}
