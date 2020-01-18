import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer } from 'components'
import {
  About,
  User,
  Login,
  Signup,
  Trend,
  Watchlist,
  PageNotFound,
  Layout
} from './pages'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { DarkMode } from 'components/_common/DarkMode'

export default function App() {
  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        type: 'dark'
      }
    })
  )

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Signup} />
            <Route exact path='/About' component={About} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Sector' component={Trend} />
            <Route exact path='/Watchlist' component={Watchlist} />
            <Route exact path='/Login' component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </ThemeProvider>
  )
}
