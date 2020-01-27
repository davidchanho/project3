import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Columns, Filter } from 'components'

export const Trend = ({ sectorHealthDataPass }) => {
  const [sectorHealthData, setSectorHealthData] = useState()
  
  useEffect(() => {
<<<<<<< HEAD
    setSectorHealthData(sectorHealthDataPass)
    console.log(sectorHealthDataPass)
  }, [])

=======
    try {
      pullSectorData().then((sectorData) => {
        const sectorHealthCalc = calcSectorHealth(sectorData);
        setSectorHealthData(sectorHealthCalc)
      })
    } catch (ex) { }
  })
>>>>>>> origin/patrickMerge
  const handleDelete = id => {
    setSectorHealthData(sectorHealthData.filter(sectorHealthData => sectorHealthData.id !== id))
  }

  const style = {
    jumbotron: {
      background: "#3f51b5",
      backgroundSize: "cover"
    }
  }
  
  return (
    <>
      <div className="jumbotron" style={style.jumbotron}>
        <div className="container for-about">
        <h1 style={{textAlign:"center", color:"white"}}>Sector Health Scores</h1>
        </div>
      </div>

      <Grid container>
        <Grid item>
          <Columns sectorHealthData={sectorHealthData} onDelete={handleDelete} />
        </Grid>

        <Grid item>
          <Filter sectorHealthData={sectorHealthData} />
        </Grid>
      </Grid>

    </>
  )
}