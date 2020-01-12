import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import './styles.scss'

export const Navbars = () => {
  return (
    <Navbar className='navbar' expand='lg'>
      <h1>
        <TrendingUpIcon fontSize='large' />
        Trend Health
      </h1>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Login</Nav.Link>
        <Nav.Link href='/Signup'>Signup</Nav.Link>
        <Nav.Link href='/Trend'>Trend</Nav.Link>
      </Nav>
    </Navbar>
  )
}
