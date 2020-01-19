import React, {useEffect, setState, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const AveragePeriod = ({user}) => {
  console.log(user)
  const [fastSMA, setFastSMA] = useState();
  const [slowSMA, setSlowSMA] = useState();

  useEffect(() => {
    try {
      setFastSMA(user.userSettings.fastSMA);
      setSlowSMA(user.userSettings.slowSMA);
    } catch (ex) { }

    
  });

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
            />
            <Form.Check
              inline
              type='radio'
              label='10'
              value='10'
              name='fastRadio'
              id='fastRadio2'
              checked={fastSMA === 10}
            />
            <Form.Check
              inline
              type='radio'
              label='15'
              value='15'
              name='fastRadio'
              id='fastRadio3'
              checked={fastSMA === 15}
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
              name='slowRadio'
              id='slowRadio1'
              checked={slowSMA === 40}
            />
            <Form.Check
              inline
              type='radio'
              label='60'
              name='slowRadio'
              id='slowRadio2'
              checked={fastSMA === 60}
            />
            <Form.Check
              inline
              type='radio'
              label='80'
              name='slowRadio'
              id='slowRadio3'
              checked={fastSMA === 80}
            />
          </Col>
        </Form.Group>
      </fieldset>
    </Form>
  )
}

export default AveragePeriod
