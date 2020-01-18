import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from 'components'
import './styles.scss'

export const Columns = props => {
  const { tests, onDelete } = props
  return (
    <CardColumns className='cardColumns'>
      {tests.map(test => (
        <TrendCard test={test} onDelete={onDelete} />
      ))}
    </CardColumns>
  )
}
