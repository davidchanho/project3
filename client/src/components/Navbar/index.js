import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import './styles.scss'

export const Navbars = ({ user }) => {
  return (
    <Navbar className='navbar' expand='lg'>
      <h1>
        <TrendingUpIcon fontSize='large' />
        {user && ("Trend Health - Hello " + user.name)}
        {!user && ("Trend Health")}
      </h1>
      <Nav className='mr-auto'>
        {!user && (
          <React.Fragment>
            <Nav.Link href='/Login'>Login</Nav.Link>
            <Nav.Link href='/Signup'>Signup</Nav.Link>
          </React.Fragment>
        )}
        {user &&
          <Nav.Link href='/Logout'>Logout</Nav.Link>
        }
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/About'>About</Nav.Link>
        <Nav.Link href='/Watchlist'>WatchList</Nav.Link>
        <Nav.Link href='/Trend'>Trend</Nav.Link>
      </Nav>
    </Navbar>
  )
}
