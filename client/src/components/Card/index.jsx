import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import tests from '../../model/testSector.json'
import InfoIcon from '@material-ui/icons/Info';
import { CircleBar } from 'components'

import './styles.scss'

export class TrendCard extends Component {
  state = {
    tests
  }

  render() {
    return (
      <>
        {tests.map(test => (
          <Card key={test.id} className='card shadow-sm'>
            <Card.Title>{test.Company}</Card.Title>
            <Card.Text>{test.Stock}</Card.Text>
            <Card.Body>
              <CircleBar health={test.Health} />
            </Card.Body>
            <InfoIcon />
          </Card>
        ))}
      </>
    )
  }
}
