import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'

export const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const menuId = 'account-menu'

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <Link href='/User'>My  Settings</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href='/Login'>Log Out</Link>
        </MenuItem>
      </Menu>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
    </>
  )
}
