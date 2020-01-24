import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export const Columns = props => {
  console.log("PROPS YO")
  console.log(props)

  const { tests, onDelete } = props
  
  let sectorHealthData = props.sectorHealthData
  console.log(sectorHealthData)
  // const sectorData  = props.sectorHealthData["PromiseValue"]
  // console.log(sectorData)

  // console.log("SECTOR DATA PROP")
  // console.log(sectorData)

  return (
    <CardColumns>
      {tests.map(test => (
        <TrendCard key={test.id} test={test} onDelete={onDelete} />
      ))}
    </CardColumns>
  )
}

// export const Columns = props => {
//   const { tests, onDelete } = props
//   // console.log("PROPS YO")
//   // console.log(props)
//   return (
//     <CardColumns>
//       {tests.map(test => (
//         <TrendCard key={test.id} test={test} onDelete={onDelete} />
//       ))}
//     </CardColumns>
//   )
// }
