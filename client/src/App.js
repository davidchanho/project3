import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, SideNav } from 'components'
import Logout from './components/Logout/index'
import {
  About,
  User,
  Login,
  Signup,
  Trend,
  Watchlist,
  PageNotFound,

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
      <SideNav>
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
      </SideNav>
      <Footer />
    </ThemeProvider>

  )
}
