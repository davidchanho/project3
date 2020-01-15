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
    const tests = this.state.tests.filter(t => t.id !== test.id)
    this.setState({ tests })
  }

  TableHeader = () => {
    let header = [
      'id',
      'ticker',
      'sector',
      'market cap',
      ' health',
      'MA',
      'Option',
      ''
    ]
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
      const { id, ticker, sector, marketCap, health, option, ma } = test
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{ticker}</td>
          <td>{sector}</td>
          <td>{marketCap}</td>
          <td>{health}</td>
          <td>{ma}</td>
          <td>{option}</td>
          <td>
            <Button
              variant='danger'
              onClick={() => this.handleDelete(test)}
              size='sm'
            >
              X
            </Button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <>
        <Table id='table' striped >
          <thead>{this.TableHeader()}</thead>
          <tbody>{this.TableData()}</tbody>
        </Table>
      </>
    ) 
  }
}
