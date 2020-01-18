import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Btns } from 'components'
import auth from '../../../services/authService'

// import './styles.scss'
const styles = {
  form: {
    margin: 'auto',
    width: 800
  },
  inputField: {
    borderRight: 0,
    boxShadow: 'none',
    borderColor: '#d5dadf'
  },
  icon: {
    borderLeft: 0,
    backgroundColor: 'white'
  },
  switch: {
    float: 'left'
  }
}

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = this.state;
      const userResponse = await auth.login(email, password);
 
      if (userResponse) {
        alert(userResponse);
      } else {
        window.location = "/";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  }

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
        <h1>Login</h1>
        <br />
        <Form.Group>
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
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <FormControl
              name='password'
              value={password}
              type={this.state.showPassword ? 'input' : 'password'}
              label='Password'
              onChange={this.handleChange}
              style={styles.inputField}
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
          style={styles.switch}
          type='switch'
          id='remember-password'
          label='Remember Password'
        />
        <Button type="submit">Login</Button>
        <Button>GitHub</Button>
        <Button>Google</Button>
        <Form.Text><a>Sign Up</a></Form.Text>
      </Form>
    )
  }
}
