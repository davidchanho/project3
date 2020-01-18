import React, { Component, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Filter } from 'components/Menu/Filter_Menu'
import { Columns } from 'components/Card/_Template'
import tests from '../../model/testSector.json'

export class Trend extends Component {
  state = {
    tests
  }

  handleDelete = test => {
    const tests = this.state.tests.filter(t => t.id !== test.id)
    this.setState({ tests })
  }

  render() {
    const { tests } = this.state
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Filter tests={tests} />
          </Grid>
          <Grid item>
            <Columns tests={tests} onDelete={this.handleDelete} />
          </Grid>
        </Grid>
      </>
    )
  }
}
