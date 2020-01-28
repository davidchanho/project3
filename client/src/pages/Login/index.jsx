import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import { LoginForm } from 'components'
import loginImg from './img/Login.png'

export const Login = () => {
  return (
    <Grid container>
      <Grid item>
        <CardMedia src={loginImg} component='img' title='logging' />
      </Grid>
      <Grid item>
        
        <LoginForm />
      </Grid>
    </Grid>
  )
}
