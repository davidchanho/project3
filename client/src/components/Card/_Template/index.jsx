import React from 'react'
import { TrendCard } from 'components'

export const Columns = props => {
  const { tests, onDelete } = props
  return (
    <div>
      {tests.map(test => (
        <TrendCard test={test} onDelete={onDelete} />
      ))}
    </div>
  )
}
