import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export const Columns = props => {
  const { tests, onDelete } = props
  // console.log("PROPS YO")
  // console.log(props)
  return (
    <CardColumns>
      {tests.map(test => (
        <TrendCard key={test.id} test={test} onDelete={onDelete} />
      ))}
    </CardColumns>
  )
}
