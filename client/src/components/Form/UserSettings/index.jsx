import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import AveragePeriod from './AveragePeriod'
import Weighting from './Weighting'

export function UserSettings() {
  const [key, setKey] = useState('AveragePeriod')

  return (
    <>
      <h1>User Settings</h1>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey='AveragePeriod' title='Average Period (Weekly)'>
          <AveragePeriod />
        </Tab>
        <Tab eventKey='Weighting' title='Weighting (%)'>
          <Weighting />
        </Tab>
      </Tabs>
    </>
  )
}
