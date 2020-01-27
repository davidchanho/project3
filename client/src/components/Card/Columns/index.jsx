import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export function Columns (props) {
  const { onDelete, sectorHealthData } = props
  
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