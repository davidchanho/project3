import React from 'react'
import Grid from '@material-ui/core/Grid'
import { LoginForm } from 'components'
import loginImg from './img/Login.png'

export const Login = () => {
  return (
    <Grid container>
      <Grid item>
        <img src={loginImg} />
      </Grid>
      <Grid item>
        <LoginForm />
      </Grid>
    </Grid>
  )
}
