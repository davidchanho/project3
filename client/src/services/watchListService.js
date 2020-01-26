import http from './httpService'
import { apiUrl } from '../config.json'
import $ from 'jquery'

export function pullStockData(stockTicker,stockSector) {
    const apiKey = '07S5MN2IBXDCQAGB'
    let thisStockData = {
        symbol: stockTicker,
        sector: stockSector,
        priceData: [],
        adxData: [],
        macdData: []
    }

    //kick off
    const getAdxData = () => {
        $.ajax({
            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
            url: `https://www.alphavantage.co/query?function=ADX&symbol=${stockTicker}&interval=weekly&time_period=10&apikey=${apiKey}`,
            async: true,
            dataType: 'json',
            success: function (res) {
                console.log(thisStockData.symbol)
                console.log('ADX:')
                console.log(res)
                Object.entries(res['Technical Analysis: ADX']).forEach(
                    ([key, value], index) => {
                        thisStockData.adxData.push(Number(value['ADX']))
                    }
                )
                getMacdData()
            }
        })
    }

    const getMacdData = () => {
        $.ajax({
            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
            url: `https://www.alphavantage.co/query?function=MACD&symbol=${stockTicker}&interval=weekly&series_type=close&apikey=${apiKey}`,
            async: true,
            dataType: 'json',
            success: function (res) {
                console.log('MACD:')
                console.log(res)
                Object.entries(res['Technical Analysis: MACD']).forEach(
                    ([key, value], index) => {
                        thisStockData.macdData.push(Number(value['MACD']))
                    }
                )

                let apiEndpoint = apiUrl + '/updateSectors'
                http.put(apiEndpoint, thisStockData)
            }
        })
    }

    const getPriceData = () => {
        //price data first
        $.ajax({
            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
            url: `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stockTicker}&apikey=${apiKey}`,
            async: true,
            dataType: 'json',
            success: function (res) {
                console.log("PRICE: ")
                Object.entries(res['Weekly Time Series']).forEach(
                    ([key, value], index) => {
                        thisStockData.priceData.push(Number(value['4. close']))
                    }
                )
                getAdxData()
            }
        })
    }
    getPriceData()
}

export async function getWatchList(email) {
    try {
        let apiEndpoint = apiUrl + '/getWatchList'
        const watchListData = await http.post(apiEndpoint, {email})
        return watchListData
    } catch {
        return []
    }
}
