import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { TrendCard } from '../Card'

export function Columns (props) {
  const {onDelete, sectorHealthData } = props
  console.log(sectorHealthData)

  if(!sectorHealthData){
    return (null)
  }

  return (
    <CardColumns>
        {sectorHealthData.map(sector => (
          <TrendCard key={sector.id} sector={sector} onDelete={onDelete} />
        ))}
    </CardColumns>
  )
}
