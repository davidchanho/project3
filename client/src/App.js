import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
import { Footer, SideNav } from 'components'
import Logout from './components/Logout/index'
=======
import { Footer } from 'components'
>>>>>>> 8f7a21129f65e0fceefbfa1fb85484f60ee87611
import {
  About,
  User,
  Login,
  Signup,
  Trend,
  Watchlist,
  PageNotFound,
<<<<<<< HEAD

} from './pages'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import auth from "./services/authService"
import './App.scss'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [user, setUser] = useState();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
=======
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
>>>>>>> 8f7a21129f65e0fceefbfa1fb85484f60ee87611
  )

  useEffect(() => {
    try {
      const user = auth.getCurrentUser();
      setUser({ user });
      console.log(user);
    } catch (ex) { }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Trend} />
            <Route exact path='/About' component={About} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Sector' component={Trend} />
            <Route exact path='/Watchlist' component={Watchlist} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Logout' component={Logout} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Trend' component={Trend} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </ThemeProvider>

  )
}
