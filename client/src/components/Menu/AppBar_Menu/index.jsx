import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import SettingsIcon from '@material-ui/icons/Settings'
import MenuItem from '@material-ui/core/MenuItem'
import Link from '@material-ui/core/Link'
import { DarkMode } from '../../_common/DarkMode'
import { AccountMenu, NotificationMenu } from '../'

const drawerWidth = 200
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  grow: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
}))

export const AppBarMenu = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <TrendingUpIcon fontSize='large' />
        <Typography className={classes.title} variant='h6' noWrap>
          Trend Health
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <MenuItem>
            <Link color='inherit' href='/About'>
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link color='inherit' href='/Signup'>
              Signup
            </Link>
          </MenuItem>
          <MenuItem>
            <Link color='inherit' href='/User'>
              <SettingsIcon />
            </Link>
          </MenuItem>
          <AccountMenu />
        </div>
      </Toolbar>
    </AppBar>
  )
}
