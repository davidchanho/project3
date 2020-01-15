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
        {tests.map(({id, Company, Stock, Health}) => (
          <Card key={id} className='card shadow-sm'>
            <Card.Title>{Company}</Card.Title>
            <Card.Text>({Stock})</Card.Text>
            <Card.Body>
              <CircleBar health={Health} />
            </Card.Body>
            <InfoIcon />
          </Card>
        ))}
      </>
    )
  }
}
