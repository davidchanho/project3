import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import { createSectors } from '../../../services/createSectors'
import { pullSectors } from '../../../services/pullSectors'


export const Filter = props => {
  const classes = useStyles()

  const createSectorsButton = () => {
    createSectors()
  }
  const pullSectorsButton = () => {
    pullSectors()
  }

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='main'>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='All' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='User' />
        </ListItem>

        <ListItem button onClick={pullSectorsButton}>
          <ListItemText primary='Update Sectors' />
        </ListItem>
        <ListItem button onClick={createSectorsButton}>
          <ListItemText primary='Create Sectors' style={{background:"red"}}/>
        </ListItem>

      </List>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 120,
    backgroundColor: theme.palette.background.paper
  }
}))
