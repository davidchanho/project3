import React from 'react'

import Button from 'react-bootstrap/Button'

import './styles.scss'

const Btn = (color, icon, props) => (
  <Button variant={color} role='button' type='submit' {...props}>
    {icon}
  </Button>
)

const Btns = {
  Login: () => Btn('primary', 'Login'),
  Signup: () => Btn('primary', 'Sign Up'),
}

export { Btns }
