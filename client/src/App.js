import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navbars } from 'components'
import {
  About,
  User,
  Login,
  Signup,
  Trend,
  Watchlist,
  PageNotFound
} from './pages'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbars />

        <Router>
          <Switch>
            <Route exact path='/About' component={About} />
            <Route exact path='/User' component={User} />
            <Route exact path='/' component={Trend} />
            <Route exact path='/Watchlist' component={Watchlist} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Signup' component={Signup} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>

        <Footer />
      </div>
    )
  }
}

export default App
