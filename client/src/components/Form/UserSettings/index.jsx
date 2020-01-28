import React, { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AveragePeriod from './AveragePeriod'
import Weighting from './Weighting'
import { updateSettings, getSettings } from 'services/userService'

export function UserSettings({ user }) {
  const [key, setKey] = useState('AveragePeriod');
  const [fastSMA, setFastSMA] = useState();
  const [slowSMA, setSlowSMA] = useState();
  const [weightObject, setWeightObject] = useState();
  const [currentUserSettings, setcurrentUserSettings] = useState();

  useEffect(() => {
    try {
      getSettings(user.email).then((loadUserSettings) => {
        if (!weightObject) {
          setFastSMA(loadUserSettings.fastSMA);
          setSlowSMA(loadUserSettings.slowSMA);
          setWeightObject({
            fastWeight: loadUserSettings.fastWeight,
            slowWeight: loadUserSettings.slowWeight,
            fastToSlowWeight: loadUserSettings.fastToSlowWeight,
            MACDWeight: loadUserSettings.MACDWeight,
            ADXWeight: loadUserSettings.ADXWeight
          })
          setcurrentUserSettings(
            {
              fastSMA: loadUserSettings.fastSMA,
              slowSMA: loadUserSettings.slowSMA,
              fastWeight: loadUserSettings.fastWeight,
              slowWeight: loadUserSettings.slowWeight,
              fastToSlowWeight: loadUserSettings.fastToSlowWeight,
              MACDWeight: loadUserSettings.MACDWeight,
              ADXWeight: loadUserSettings.ADXWeight
            }
          )
        }
      })
    } catch (ex) { }
  }, [user])

  const handleSave = () => {
    const userSettings = { ...weightObject, "fastSMA": fastSMA, "slowSMA": slowSMA }
    updateSettings(user.email, userSettings);
  }

  const handleWeightChange = (newWeightObject) => {
    setWeightObject(newWeightObject);
  }

  const handleFastSMAChange = (newFastSMA) => {
    setFastSMA(newFastSMA);
  }

  const handleSlowSMAChange = (newSlowSMA) => {
    setSlowSMA(newSlowSMA);
  }

  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col className="col-sm-auto">
          <h1>User Settings</h1>
        </Col>
        <Col>
          <button className="btn btn-primary" onClick={handleSave}>Save User Options</button>
        </Col>
      </Row>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey='AveragePeriod' title='Average Period (Weekly)'>
          <AveragePeriod user={currentUserSettings} onFastSMAChange={handleFastSMAChange} onSlowSMAChange={handleSlowSMAChange} />
        </Tab>
        <Tab eventKey='Weighting' title='Weighting (%)'>
          <Weighting user={currentUserSettings} onWeightChange={handleWeightChange} />
        </Tab>
      </Tabs>
    </React.Fragment >
  )
}
