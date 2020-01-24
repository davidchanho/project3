import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export function Columns (props) {
  // console.log("PROPS YO")
  // console.log(props)
  const { tests, onDelete, sectorHealthData } = props
  
  if(!sectorHealthData){
    return (null)
  }

  console.log("SECTOR HEALTH DATA...")
  console.log(sectorHealthData)
  return (
    <div>
        <CardColumns>
          {sectorHealthData &&tests.map(test => (
            <TrendCard key={test.id} test={test} onDelete={onDelete} />
          ))}
      </CardColumns>
    </div>
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