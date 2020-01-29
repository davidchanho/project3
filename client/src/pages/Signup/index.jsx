import React from 'react'
import Paper from '@material-ui/core/Paper'
import { SignupForm } from 'components'
import CardMedia from '@material-ui/core/CardMedia'
import signupImg from './img/dev.png'

export const Signup = () => {
    return(
    <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <Paper elevation={6} style={{ marginTop: '2%', textAlign:"center", padding:"2%" }}>
                <h1>New User Signup</h1>
                <div  className="row justify-content-around" style={{marginTop:"2%"}}>
                <div className="col-lg-6">
                    <CardMedia src={signupImg} component='img' title='logging' />
                </div>
                <div className="col-lg-6 ml-auto">
                    <SignupForm />
                </div> 
                </div>
            </Paper>
        </div>
        </div>
    </div>

    )

}

