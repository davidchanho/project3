import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { LoginForm } from 'components'
import loginImg from './img/Login.png'
import Paper from '@material-ui/core/Paper'

export const Login = () => {
  return (       
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <Paper elevation={6} style={{ marginTop: '2%', textAlign:"center", padding:"2%" }}>
          <h1>Come Back Soon!</h1>
            <div  className="row justify-content-around" style={{marginTop:"2%"}}>
            <div className="col-lg-12">
              {/* <CardMedia src={loginImg} component='img' title='logging' /> */}
            </div>
          </div>
        </Paper>
    </div>
  </div>
</div>
  )
}
