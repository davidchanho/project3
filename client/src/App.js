import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navbars } from 'components'
import { Login, Signup, Trend } from './pages'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbars />

        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Trend' component={Trend} />
          </Switch>
        </Router>

        <Footer />
      </div>
    )
  }
}

export default App
