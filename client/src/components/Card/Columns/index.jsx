import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export function Columns (props) {
  const {onDelete, sectorHealthData } = props
  console.log(sectorHealthData)

  if(!sectorHealthData){
    return(null)
  }

  return (
    <div>
        <CardColumns>{
             sectorHealthData.map(sector=> (
              <TrendCard key={sector.id} sector={sector} onDelete={onDelete} />
            ))
          }
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