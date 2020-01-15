import React from 'react'

import './styles.scss'

export const CircleBar = props => {
  return (
    <>
      <span
        data-preset='circle'
        className='ldBar label-center'
        data-value={props.health}
      />
    </>
  )
}
