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
        <Router>
          <Switch>
            <Route exact path='/' component={Trend} />
            <Route exact path='/About' component={About} />
            <Route
              exact
              path='/User'
              render={props => <User {...props} user={user} />}
            />
            <Route exact path='/Sector' component={Trend} />
            <Route exact path='/Watchlist' component={Watchlist} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Logout' component={Logout} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Trend' component={Trend} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Template>
    </Theme>
  )
}
