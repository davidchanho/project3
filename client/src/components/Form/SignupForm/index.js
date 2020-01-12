import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Btns } from 'components'
// import { Input, PasswordInput } from '../Input'

// import './styles.scss'
const styles = {
  form: {
    margin: 'auto',
    width: 800
  },
  searchField: {
    borderRight: 0,
    boxShadow: 'none',
    borderColor: '#d5dadf'
  },
  icon: {
    borderLeft: 0,
    backgroundColor: 'white'
  }
}

export class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false
  }

  handleSubmit = e => e.preventDefault()

  handlePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password } = this.state

    return (
      <Form style={styles.form} onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <br />
        <Form.Row>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <InputGroup>
              <FormControl
                name='email'
                value={email}
                type='email'
                label='Email Address'
                onChange={this.handleChange}
                style={styles.searchField}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Verify Email Address</Form.Label>
            <InputGroup>
              <FormControl
                name='email'
                value={email}
                type='email'
                label='Email Address'
                onChange={this.handleChange}
                style={styles.searchField}
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <FormControl
                name='password'
                value={password}
                type={this.state.showPassword ? 'input' : 'password'}
                label='Password'
                onChange={this.handleChange}
                style={styles.searchField}
              />
              <InputGroup.Append>
                <InputGroup.Text
                  style={styles.icon}
                  onClick={this.handlePassword}
                >
                  {this.state.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Verify Password</Form.Label>
          <InputGroup>
            <FormControl
              name='password'
              value={password}
              type={this.state.showPassword ? 'input' : 'password'}
              label='Password'
              onChange={this.handleChange}
              style={styles.searchField}
            />
            <InputGroup.Append>
              <InputGroup.Text
                style={styles.icon}
                onClick={this.handlePassword}
              >
                {this.state.showPassword ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Check
          type='switch'
          id='remember-password'
          label='Remember Password'
        />
        <Btns.Signup />
      </Form>
    )
  }
}
