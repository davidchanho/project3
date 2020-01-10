import React from 'react'

import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

const styles = {
  searchField: {
    borderRight: 0,
    boxShadow: 'none',
    borderColor: '#d5dadf'
  },
  icon: {
    borderLeft: 0,
    backgroundColor: 'white'
  }
}

export const Input = ({ name, label, value, onChange }) => {
  return (
    <InputGroup>
      <FormControl
        type={name}
        name={name}
        value={value}
        onChange={onChange}
        style={styles.searchField}
      />
      <InputGroup.Append>
        <InputGroup.Text style={styles.icon}>
          {name === 'password' ? <VisibilityIcon /> : null}
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  )
}
