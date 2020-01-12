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
export class LoginForm extends Component {
  state = {
    account: { email: '', password: '' },
    showPassword: false
  }

  handleSubmit = e => e.preventDefault()

  handlePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.type] = input.value
    this.setState({ account })
  }

  render() {
    const { account } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <InputGroup>
          <FormControl
            name='email'
            value={this.state.account.email}
            label='Email Address'
            onChange={this.handleChange}
            style={styles.searchField}
          />
        </InputGroup>

        <InputGroup>
          <FormControl
            name='password'
            value={this.state.account.password}
            label='Password'
            onChange={this.handleChange}
            style={styles.searchField}
          />
          <InputGroup.Append>
            <InputGroup.Text style={styles.icon} onClick={this.handlePassword}>
              {this.state.showPassword ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Check
          type='switch'
          id='remember-password'
          label='Remember Password'
        />
        <Btns.Login />
      </Form>
    )
  }
}
