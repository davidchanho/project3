import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import tests from '../../model/testWatchlist.json'
import { getWatchList } from '../../services/watchListService'

export function WatchTable({user}) {
  const [state, setState] = useState({
    columns: [
      { title: 'Id', field: 'id', type: 'numeric' },
      { title: 'Ticker', field: 'ticker' },
      { title: 'Sector', field: 'sector' },
      { title: 'Market Cap', field: 'marketCap' },
      {
        title: 'Health (%)',
        field: 'health',
        type: 'numeric'
      }
      // { title: 'MA', field: 'ma' },
      // { title: 'Option', field: 'option' }
    ],
    data: tests
  })

  useEffect(() => {
    try {
      getWatchList(user.email).then((loadWatchList) => {
        console.log(loadWatchList)
        if(loadWatchList.data.count > 0) {
          console.log("switching data")
          setState({...state,data:loadWatchList.data});
        }
      })
    } catch (ex) { console.log("ERROR: "+ex) }
  }, [user])

  return (
    <MaterialTable
      title='Watch List'
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
