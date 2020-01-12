import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Button from 'react-bootstrap/Button'
import { Btns } from 'components'
// import { Input, PasswordInput } from '../Input'

// import './styles.scss'
const styles = {
  form: {
    margin: 'auto',
    width: 800
  },
  inputField: {
    boxShadow: 'none',
    borderColor: '#d5dadf'
  },
  icon: {
    borderLeft: 0,
    backgroundColor: 'white'
  },
  switch:{
    float: 'left'
  }
}

export class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    verifyEmail: '',
    verifyPassword: ''
  }

  handleSubmit = e => e.preventDefault()

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password, verifyEmail, verifyPassword } = this.state

    return (
      <Form style={styles.form} onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <br />
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email Address</Form.Label>
            <InputGroup>
              <FormControl
                name='email'
                value={email}
                type='email'
                label='Email Address'
                onChange={this.handleChange}
                style={styles.inputField}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Verify Email Address</Form.Label>
            <InputGroup>
              <FormControl
                name='verifyEmail'
                value={verifyEmail}
                type='email'
                label='Email Address'
                onChange={this.handleChange}
                style={styles.inputField}
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <FormControl
                name='password'
                value={password}
                type='password'
                label='Password'
                onChange={this.handleChange}
                style={styles.inputField}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Verify Password</Form.Label>
            <InputGroup>
              <FormControl
                name='verifyPassword'
                value={verifyPassword}
                type='password'
                label='Password'
                onChange={this.handleChange}
                style={styles.inputField}
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Check style={styles.switch} type='switch' id='show-password' label='Show Password' />
        <Btns.Signup />
        <Button>Sign in with GitHub</Button>
        <Button>Sign in with Google</Button>
      </Form>
    )
  }
}
