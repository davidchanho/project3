import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Columns, Filter } from 'components'
import { calcSectorHealth } from '../../services/calcSectorHealth'
import { pullSectorData } from '../../services/pullSectors'

export const Trend = () => {
  const [sectorHealthData, setSectorHealthData] = useState()
  useEffect(() => {
    try {
      pullSectorData().then((sectorData) => {
        const sectorHealthCalc = calcSectorHealth(sectorData);
        setSectorHealthData(sectorHealthCalc)
      })
    } catch (ex) { }
  }, [])

  const handleDelete = id => {
    setSectorHealthData(sectorHealthData.filter(sectorHealthData => sectorHealthData.id !== id))
  }

  if(!sectorHealthData){
    return(null)
  }

  return (
    <>
      <Grid container>
          <Grid item>
            <Filter sectorHealthData={sectorHealthData} />
            </Grid>
            <Grid item>
            <Columns sectorHealthData={sectorHealthData} onDelete={handleDelete} />
          </Grid>
      </Grid>
    </>
  )
}