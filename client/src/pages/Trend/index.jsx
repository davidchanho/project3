import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Columns, Filter } from 'components'
import {testsData} from 'model/sector'
import { calcSectorHealth } from '../../services/calcSectorHealth'
import { pullSectors } from '../../services/pullSectors'

export const Trend = () => {
  const [tests, setTests] = useState(testsData)
  const [sectorHealthData, setSectorHealthData] = useState()

  useEffect(() => {
    try {
      const sectorHealthCalc = calcSectorHealth()
      setSectorHealthData(sectorHealthCalc)
      console.log(sectorHealthData)
    } catch (ex) {}
  }, [])
  
  const handleDelete = id => {
    setTests(tests.filter(tests => tests.id !== id))
  }

  return (
    <>
      <Grid container>
        <Grid item>
          <Filter sectorHealthData={sectorHealthData} />
        </Grid>
        <Grid item>
          <Columns tests={tests} sectorHealthData={sectorHealthData} onDelete={handleDelete} />
        </Grid>
      </Grid>
    </>
  )
}
