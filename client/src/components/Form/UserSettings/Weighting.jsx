import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Weighting = ({user}) => {
  console.log(user)
  const [fastWeight, setFastWeight] = useState();
  const [slowWeight, setSlowWeight] = useState();
  const [fastToSlowWeight, setFastToSlowWeight] = useState();
  const [MACDWeight, setMACDWeight] = useState();
  const [ADXWeight, setADXWeight] = useState();

  useEffect(() => {
    try {
      setFastWeight(user.userSettings.fastWeight);
      setSlowWeight(user.userSettings.slowWeight);
      setFastToSlowWeight(user.userSettings.fastToSlowWeight);
      setMACDWeight(user.userSettings.MACDWeight);
      setADXWeight(user.userSettings.ADXWeight);
    } catch (ex) { }
  });

  return (
    <Form>
      <Row>
        <Col>
          <h3>Slow Moving Average</h3>
          <Form.Group controlId='FastSMA'>
            <Form.Label>Fast</Form.Label>
            <Form.Control type='input' value={fastWeight} />
          </Form.Group>
          <Form.Group controlId='SlowSMA'>
            <Form.Label>Slow</Form.Label>
            <Form.Control type='input' value={slowWeight} />
          </Form.Group>
          <Form.Group controlId='FasterSlowSMA'>
            <Form.Label>Faster > Slow </Form.Label>
            <Form.Control type='input' value={fastToSlowWeight} />
          </Form.Group>
        </Col>
        <Col>
          <h3>Other</h3>
          <Form.Group controlId='MACD'>
            <Form.Label>Weekly MACD Pos. Crossover</Form.Label>
            <Form.Control type='input' value={MACDWeight} />
          </Form.Group>
          <Form.Group controlId='ADX'>
            <Form.Label>ADX</Form.Label>
            <Form.Control type='input' value={ADXWeight} />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Weighting
