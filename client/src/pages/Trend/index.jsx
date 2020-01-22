import React, { Component, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Columns, Filter } from 'components'
import testsData from 'model/testSector.json'

export const Trend = () => {
  const [tests, setTests] = useState(testsData)

  const handleDelete = id => {
    setTests(tests.filter(tests => tests.id !== id))
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Filter tests={tests} />
        </Grid>
        <Grid item xs={'auto'}>
          <Columns tests={tests} onDelete={handleDelete} />
        </Grid>
      </Grid>
    </>
  )
}
