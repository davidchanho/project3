import React from 'react'
import { Form, Field } from 'formik'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Input from './Input'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    width: 300,
    padding: 40,
    margin: 'auto',
  },
}))

const BasicForm = () => {
  const classes = useStyles()
  return (
    <Form className={classes.form}>
      <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='center'
        spacing={3}
      >
        <Grid item>
          <Field
            type='email'
            name='email'
            label='Email Address'
            component={Input}
          />
        </Grid>
        <Grid item>
          <Field
            type='password'
            name='password'
            label='Password'
            autoComplete='none'
            component={Input}
          />
        </Grid>
        <Grid item>
          <Button type='submit'>Submit</Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default BasicForm
