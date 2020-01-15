import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'

import { TrendCard } from 'components'

import './styles.scss'

export const Columns = () => {
  return (
    <CardColumns className='cardColumns'>
      <TrendCard />
    </CardColumns>
  )
}
