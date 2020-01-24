import React, { useEffect, useState } from 'react'
import Template from 'templates'
import Theme from 'themes'
import Routes from 'routes'
import auth from './services/authService'

export default function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    try {
      const userData = auth.getCurrentUser()
      setUser(userData)
      console.log(userData)
    } catch (ex) {}
  }, [])

  return (
    <Theme>
      <Template>
        <Routes user={user}/>
      </Template>
    </Theme>
  )
}
