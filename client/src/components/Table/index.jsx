import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { getWatchList, pullStockData, calcStockHealth } from 'services/watchListService'

export function WatchTable({ user }) {
  const [state, setState] = useState({
    columns: [
      { title: 'Id', field: 'id', type: 'numeric' },
      { title: 'Ticker', field: 'indexName' },
      { title: 'Sector', field: 'sector' },
      { title: 'Price', field: 'price'},
      { title: 'Market Cap', field: 'marketCap' },
      {
        title: 'Health (%)',
        field: 'health',
        type: 'numeric'
      }
    ],
    data: []
  })
  const [addWatchList, setAddWatchList] = useState();

  useEffect(() => {
    try {
      getWatchList(user.email).then((loadWatchList) => {
        if (loadWatchList.data.length > 0) {
          loadWatchList.data.forEach((stockData, index) => {

            console.log(stockData)
            // fetch data from yahoo finance API
              
            calcStockHealth(user.email, stockData).then((health) => {
              console.log(health)

              loadWatchList.data[index].sector = "technology"
              loadWatchList.data[index].marketCap = 400
              loadWatchList.data[index].price = 50

              loadWatchList.data[index].health = (health*100).toFixed(1);
              loadWatchList.data[index].indexName = loadWatchList.data[index].indexName.toUpperCase();
              setState({ ...state, data: loadWatchList.data });
            })
          });
        }
      })
    } catch (ex) { console.log("ERROR: " + ex) }
  }, [user])

  const handleWatchlistAdd = (e) => {
    e.preventDefault();
    try {
      pullStockData(user.email, addWatchList, "Test Sector", state.data)
    } catch {
      alert('stock ticker not found')
    }
  }

  return (
    <React.Fragment>
      <form class="form-inline">
        <div class="form-group mb-2">
          <label for="stockTicker">Add Ticker to Watchlist: </label>
          <input type="text" class="form-control" id="stockTicker" placeholder="ex: AAPL" onChange={e => setAddWatchList(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-primary mb-2 ml-2" onClick={handleWatchlistAdd}>Add Stock</button>
      </form>
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
    </React.Fragment>
  )
}
