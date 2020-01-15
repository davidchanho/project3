import React from 'react'
import Form from 'react-bootstrap/Form'

const AveragePeriod = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Fast Moving</Form.Label>
        <div key={`fast-radio`} className='mb-3'>
          <Form.Check inline label='5' type='radio' id={`fast-radio-1`} />
          <Form.Check inline label='10' type='radio' id={`fast-radio-2`} />
          <Form.Check inline label='20' type='radio' id={`fast-radio-3`} />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>Slow Moving</Form.Label>
        <div key={`slow-radio`} className='mb-3'>
          <Form.Check inline label='5' type='radio' id={`slow-radio-1`} />
          <Form.Check inline label='10' type='radio' id={`slow-radio-2`} />
          <Form.Check inline label='20' type='radio' id={`slow-radio-3`} />
        </div>
      </Form.Group>
    </Form>
  )
}

export default AveragePeriod
