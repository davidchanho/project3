import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import './styles.scss'

export const Navbars = () => {
  return (
    <Navbar className='navbar' expand='lg'>
      <h1>
        <TrendingUpIcon fontSize='large' />
        Trend Health
      </h1>
    </Navbar>
  )
}
