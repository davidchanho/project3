import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navbars } from 'components'
import { Login, Trend } from './pages'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbars />

        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/trend' component={Trend} />
          </Switch>
        </Router>

        <Footer />
      </div>
    )
  }
}

export default App
