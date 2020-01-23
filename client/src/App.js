import React, { useEffect, useState } from 'react'
import Template from 'templates'
import Theme from 'themes'
import Routes from 'routes'
import auth from './services/authService'
import { pullSectorData } from './services/pullSectors'

export default function App() {
  const [user, setUser] = useState()
  const [sectorData, setSectorData] = useState()

  useEffect(() => {
    try {
      const userData = auth.getCurrentUser()
      setUser(userData)
      const sectorDataPull = pullSectorData()
      setSectorData(sectorDataPull)
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
