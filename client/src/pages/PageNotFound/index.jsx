import React from 'react'
import img404 from './img/404.png'

export const PageNotFound = () => {
  return <img src={img404} alt='page not found' style={styles} />
}

const styles = {
  padding: 20
}
