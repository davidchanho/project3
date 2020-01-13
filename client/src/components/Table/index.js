import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import tests from '../../model/testWatchlist.json'
import './styles.scss'

export class WatchTable extends Component {
  state = {
    tests,
    info: 'info'
  }

  handleDelete = test => {
    const tests = this.state.tests.filter(t => t._id !== test._id)
    this.setState({ test })
  }

  TableHeader = () => {
    let header = Object.keys(tests[0])
    return header.map((key, index) => {
      return (
        <th key={index} className={key}>
          {key.toUpperCase()}
        </th>
      )
    })
  }

  TableData() {
    return this.state.tests.map((test, index) => {
      const { id, ticker, sector, marketCap, health, option, ma } = test //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{ticker}</td>
          <td>{sector}</td>
          <td>{marketCap}</td>
          <td>{health}</td>
          <td>{ma}</td>
          <td>{option}</td>
          <Button
            variant='danger'
            onDelete={() => this.handleDelete(test)}
            size='sm'
          >
            X
          </Button>
        </tr>
      )
    })
  }

  render() {
    return (
      <>
        <Table id='tests'>
          {this.TableHeader()}
          {this.TableData()}
        </Table>
      </>
    )
  }
}
