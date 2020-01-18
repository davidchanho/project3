import React, { useState } from 'react'
import MaterialTable from 'material-table'
import tests from '../../model/testWatchlist.json'

export function WatchTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id', type: 'numeric' },
      { title: 'Ticker', field: 'ticker' },
      { title: 'Sector', field: 'sector' },
      { title: 'Market Cap', field: 'marketCap' },
      {
        title: 'Health (%)',
        field: 'health',
        type: 'numeric'
      },
      { title: 'MA', field: 'ma' },
      { title: 'Option', field: 'option' }
    ],
    data: tests
  })

  return (
    <MaterialTable
      title='Sector'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              setState(prevState => {
                const data = [...prevState.data]
                data.push(newData)
                return { ...prevState, data }
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data]
                  data[data.indexOf(oldData)] = newData
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              setState(prevState => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                return { ...prevState, data }
              })
            }, 600)
          })
      }}
    />
  )
}
