import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const AveragePeriod = () => {
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
              name='fastRadio'
              id='fastRadio1'
            />
            <Form.Check
              inline
              type='radio'
              label='10'
              name='fastRadio'
              id='fastRadio2'
            />
            <Form.Check
              inline
              type='radio'
              label='15'
              name='fastRadio'
              id='fastRadio3'
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
            />
            <Form.Check
              inline
              type='radio'
              label='60'
              name='slowRadio'
              id='slowRadio2'
            />
            <Form.Check
              inline
              type='radio'
              label='80'
              name='slowRadio'
              id='slowRadio3'
            />
          </Col>
        </Form.Group>
      </fieldset>
    </Form>
  )
}

export default AveragePeriod
