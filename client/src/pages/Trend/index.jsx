import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Columns, Filter } from 'components'

export const Trend = ({ sectorHealthDataPass }) => {
  const [sectorHealthData, setSectorHealthData] = useState()
  
  useEffect(() => {
    setSectorHealthData(sectorHealthDataPass)
    console.log("SECTOR HEALTH DATA FOR SECTOR PAGE...")
    console.log(sectorHealthDataPass)
  }, [])

  const handleDelete = id => {
    setSectorHealthData(sectorHealthData.filter(sectorHealthData => sectorHealthData.id !== id))
  }

  const style = {
    jumbotron: {
      background: "#3f51b5",
      backgroundSize: "cover"
    }
  }

  if(!sectorHealthDataPass){
    return(null)
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