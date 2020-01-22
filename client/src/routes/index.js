import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  About,
  User,
  Login,
  Signup,
  Trend,
  Watchlist,
  PageNotFound,
  Logout
} from 'pages'

export default function Routes({ props }) {
  // const { user } = props
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Trend} />
        <Route exact path='/About' component={About} />
        <Route
          exact
          path='/User'
          render={props => <User {...props} />}
          // user={user}
        />
        <Route exact path='/Sector' component={Trend} />
        <Route exact path='/Watchlist' component={Watchlist} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Logout' component={Logout} />
        <Route exact path='/Signup' component={Signup} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
