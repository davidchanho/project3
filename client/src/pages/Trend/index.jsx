import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Columns, Filter } from 'components'
import tests from '../../model/testSector.json'

const styles = {
  row: {
    height: '100%'
  }
}
export class Trend extends Component {
  state = {
    tests
  }

  handleDelete = test => {
    const tests = this.state.tests.filter(t => t.id !== test.id)
    this.setState({ tests })
  }

  render() {
    return (
      <>
        <Container>
          <Row style={styles.row}>
            <Col>
              <Filter tests={this.state.tests} />
            </Col>
            <Col>
              <Columns tests={this.state.tests} onDelete={this.handleDelete} />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
