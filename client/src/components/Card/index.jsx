import React from 'react'
import Card from 'react-bootstrap/Card'
import InfoIcon from '@material-ui/icons/Info'
import ClearIcon from '@material-ui/icons/Clear'
import { CircleBar } from 'components'

import './styles.scss'

export const TrendCard = props => {
  const { test } = props

  return (
    <>
      <Card key={test.id} className='card shadow-sm'>
        <ClearIcon className='close' onClick={() => props.onDelete(test)} />
        <Card.Title>{test.Company}</Card.Title>
        <Card.Text>({test.Stock})</Card.Text>
        <Card.Body>
          <CircleBar health={test.Health} />
        </Card.Body>
        <InfoIcon />
      </Card>
    </>
  )
}
