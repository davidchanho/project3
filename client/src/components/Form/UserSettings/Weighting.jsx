import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Weighting = () => {
  return (
    <Form>
      <Row>
        <Col>
          <h3>Slow Moving Average</h3>
          <Form.Group controlId='FastSMA'>
            <Form.Label>Fast</Form.Label>
            <Form.Control type='input' />
          </Form.Group>
          <Form.Group controlId='SlowSMA'>
            <Form.Label>Slow</Form.Label>
            <Form.Control type='input' />
          </Form.Group>
          <Form.Group controlId='FasterSlowSMA'>
            <Form.Label>Faster > Slow </Form.Label>
            <Form.Control type='input' />
          </Form.Group>
        </Col>
        <Col>
          <h3>Other</h3>
          <Form.Group controlId='MACD'>
            <Form.Label>Weekly MACD Pos. Crossover</Form.Label>
            <Form.Control type='input' />
          </Form.Group>
          <Form.Group controlId='ADX'>
            <Form.Label>ADX</Form.Label>
            <Form.Control type='input' />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Weighting
