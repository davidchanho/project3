import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export const Filter = props => {
  const handleShow = () => {
    alert('You clicked the third ListGroupItem')
  }

  return (
    <ListGroup as='ul' defaultActiveKey='#link1'>
      <ListGroup.Item action as='li' href='#link1'>
        Display All
      </ListGroup.Item>
      <ListGroup.Item action as='li' href='#link2' onClick={handleShow}>
        User
      </ListGroup.Item>
    </ListGroup>
  )
}
