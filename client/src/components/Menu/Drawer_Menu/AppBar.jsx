import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import Brand from './Brand'
import auth from 'services/authService'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

export default function AppBars({ onDrawerToggle }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [userLogged, setUserLogged] = useState()

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    try {
      const userData = auth.getCurrentUser()
      setUserLogged(userData)
      console.log('DRAWER')
      console.log(userData)
    } catch (ex) {}
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={() => onDrawerToggle()}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Brand />

          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>
                <Link href='/About' color='inherit'>
                  About
                </Link>
              </MenuItem>
              {userLogged ? (
                <>
                  <MenuItem>
                    <Link href='User' color='inherit'>
                      User
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='Logout' color='inherit'>
                      Logout
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>
                    <Link href='Login' color='inherit'>
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='Signup' color='inherit'>
                      Signup
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
