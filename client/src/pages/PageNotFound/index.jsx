import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import img404 from './img/404.png'

export const PageNotFound = () => {
  
  return <CardMedia src={img404 } component='img' title='404' />
}

const styles = {
  padding: 20
}
