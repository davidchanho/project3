import React, { useEffect, useState } from 'react'
import Template from 'templates'
import Theme from 'themes'
import Routes from 'routes'
import auth from './services/authService'
import { pullSectorData } from './services/pullSectors'
import { calcSectorHealth } from './services/calcSectorHealth'

export default function App() {
  const [user, setUser] = useState()
  const [sectorData, setSectorData] = useState()
  const [sectorHealthData, setSectorHealthData] = useState()

  useEffect(() => {
    try {
      const userData = auth.getCurrentUser()
      setUser(userData)
      console.log(userData)

      const sectorDataPull = pullSectorData()
      setSectorData(sectorDataPull)

      const sectorHealthCalc = calcSectorHealth()
      setSectorHealthData(sectorHealthCalc)

      // const calcSectorHealth = calcSectorHealth()
      // setSectorHealthData(calcSectorHealth)

    } catch (ex) {}
  }, [])




  return (
    <Theme>
      <Template>
        <Routes user={user} />
      </Template>
    </Theme>
  )
}
