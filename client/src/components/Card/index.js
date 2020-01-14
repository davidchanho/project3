import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import tests from '../../model/testSector.json'
import { CircleBar } from 'components'


const styles = {
  card: {
    textAlign: 'center',
  }
}

export class TrendCard extends Component {
  state = {
    tests
  }

  render() {
    return (
      <>
        {tests.map(test => (
          <Card key={test.id} style={styles.card}>
            <Card.Title>
              {test.Company}
              <br />
              ({test.Stock})
            </Card.Title>
            <Card.Body>
              <CircleBar health={test.Health} />
            </Card.Body>
          </Card>
        ))}
      </>
    )
  }
}
