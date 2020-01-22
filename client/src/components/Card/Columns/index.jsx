import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export const Columns = props => {
  const { tests, onDelete } = props
  return (
    <CardColumns>
      {tests.map(test => (
        <TrendCard key={test.id} test={test} onDelete={onDelete} />
      ))}
    </CardColumns>
  )
}
