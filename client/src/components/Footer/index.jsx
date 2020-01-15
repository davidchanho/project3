import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import './styles.scss'

export const Footer = () => {
  return (
    <Navbar className='footer justify-content-center' expand='lg'>
      <small>©Trend Health</small>
    </Navbar>
  )
}
