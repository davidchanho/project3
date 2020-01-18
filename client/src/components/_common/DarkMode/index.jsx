import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness7Icon from '@material-ui/icons/Brightness7'

class DarkMode extends Component {
  state = {
    isDarkMode: false
  }

  handleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }

  render() {
    return (
      <IconButton onClick={this.handleDarkMode}>
        {this.state.isDarkMode ? <Brightness7Icon /> : <Brightness5Icon />}
      </IconButton>
    )
  }
}

export { DarkMode }
