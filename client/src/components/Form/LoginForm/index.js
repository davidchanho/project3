import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

import { Btns } from 'components'
import { Input } from '../Input'

// import './styles.scss'

export class LoginForm extends Component {
  state = {
    account: { email: '', password: '' },
    showPassword: false
  }

  handleSubmit = e => e.preventDefault()

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
        <Input
          name='email'
          value={account.email}
          label='Email Address'
          onChange={this.handleChange}
        />
        <Input
          name='password'
          value={account.password}
          label='Password'
          onChange={this.handleChange}
        />
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
