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
      <Nav className='ml-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/About'>About</Nav.Link>
        <Nav.Link href='/Login'>Login</Nav.Link>
        <Nav.Link href='/Signup'>Signup</Nav.Link>
        <Nav.Link href='/Watchlist'>WatchList</Nav.Link>
        <Nav.Link href='/User'>User</Nav.Link>
      </Nav>
    </Navbar>
  )
}
