import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Columns, Filter } from 'components'
// import testsData from 'model/testSector.json'
import {testsData} from 'model/sector'

export const Trend = () => {
  const [tests, setTests] = useState(testsData)

  const handleDelete = id => {
    setTests(tests.filter(tests => tests.id !== id))
  }

  return (
    <>
      <Grid container>
        <Grid item>
          <Filter tests={tests} />
        </Grid>
        <Grid item>
          <Columns tests={tests} onDelete={handleDelete} />
        </Grid>
      </Grid>
    </>
  )
}
