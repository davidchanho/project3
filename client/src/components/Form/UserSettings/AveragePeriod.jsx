import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { Button } from '@material-ui/core';

const AveragePeriod = ({ user, onFastSMAChange, onSlowSMAChange }) => {
  const [fastSMA, setFastSMA] = useState();
  const [slowSMA, setSlowSMA] = useState();

  useEffect(() => {
    try {
      if (!fastSMA && !slowSMA) {
        setFastSMA(user.userSettings.fastSMA);
        setSlowSMA(user.userSettings.slowSMA);
        onFastSMAChange(user.userSettings.fastSMA);
        onSlowSMAChange(user.userSettings.slowSMA);
      }
    } catch (ex) { }
  });


  const handleFastChange = (e) => {
    setFastSMA(e.target.value);
    onFastSMAChange(e.target.value)
  }

  const handleSlowChange = (e) => {
    setSlowSMA(e.target.value);
    onSlowSMAChange(e.target.value)
  }

  return (
    <Form>
      <fieldset>
        <Form.Group>
          <Form.Label as='legend'>Fast Moving</Form.Label>
          <Col>
            <Form.Check
              inline
              type='radio'
              label='5'
              value='5'
              name='fastRadio'
              id='fastRadio1'
              checked={fastSMA == 5}
              onChange={handleFastChange}
            />
            <Form.Check
              inline
              type='radio'
              label='10'
              value='10'
              name='fastRadio'
              id='fastRadio2'
              checked={fastSMA == 10}
              onChange={handleFastChange}
            />
            <Form.Check
              inline
              type='radio'
              label='15'
              value='15'
              name='fastRadio'
              id='fastRadio3'
              checked={fastSMA == 15}
              onChange={handleFastChange}
            />
          </Col>
        </Form.Group>
      </fieldset>
      <fieldset>
        <Form.Group>
          <Form.Label as='legend'>Slow Moving</Form.Label>
          <Col>
            <Form.Check
              inline
              type='radio'
              label='40'
              value='40'
              name='slowRadio'
              id='slowRadio1'
              onChange={handleSlowChange}
              checked={slowSMA == 40}
            />
            <Form.Check
              inline
              type='radio'
              label='60'
              value='60'
              name='slowRadio'
              id='slowRadio2'
              onChange={handleSlowChange}
              checked={slowSMA == 60}
            />
            <Form.Check
              inline
              type='radio'
              label='80'
              value='80'
              name='slowRadio'
              id='slowRadio3'
              onChange={handleSlowChange}
              checked={slowSMA == 80}
            />
          </Col>
        </Form.Group>
      </fieldset>
    </Form>
  )
}

export default AveragePeriod
