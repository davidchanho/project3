import React from 'react'

import './styles.scss'

export const CircleBar = (props) => {
  return (
    <div
      data-preset='circle'
      className='ldBar label-center'
      data-value={props.health}
    />
  )
}
