import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navbars } from 'components'
import Logout from "./components/Logout/logout"
import auth from "./services/authService"
import { Home, About, User, Login, Signup, Trend, Watchlist, PageNotFound } from './pages'
// import { ToastContainer } from 'react-toastify';
import './App.scss'
// import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user })
  }

  render() {
    return (
      <div className='App'>
        <Navbars user={this.state.user} />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Watchlist' component={Watchlist} />
            <Route exact path='/About' component={About} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Logout' component={Logout} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Trend' component={Trend} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>

        <Footer />
      </div>

    )
  }
}

export default App
