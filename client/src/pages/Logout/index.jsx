import React, { Component } from 'react'
import auth from 'services/authService'

export class Logout extends Component {
  componentDidMount() {
    auth.logout()
  }

  render() {
    return <h1> come back soon</h1>
  }
}

export default Logout
