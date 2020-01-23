import http from "./httpService";
import { apiUrl } from "../config.json";
import testsData from '../model/testSector.json'
import $ from 'jquery'
export function pullSectors() {
    const apiKey = "ZXKO99TVLOE9KC7R"
    const allStockData = []
    let counter = 0
const getData= () => {
        let thisStockData = {
            symbol: testsData[counter].Stock,
            priceData: [],
            adxData: [],
            macdData: []
            }
    //price data first
        $.ajax({
            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
            url:`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${testsData[counter].Stock}&apikey=${apiKey}`,
            async: true,
            dataType: 'json',
            success:function(res){
                console.log(res)
                Object.entries(res['Weekly Time Series']).forEach(([key, value], index) => {thisStockData.priceData.push(Number(value["4. close"]))});
                
                $.ajax({
                    /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
                    url:`https://www.alphavantage.co/query?function=ADX&symbol=${testsData[counter].Stock}&interval=weekly&time_period=10&apikey=${apiKey}`,
                    async: true,
                    dataType: 'json',
                    success:function(res){
                        console.log(res)
                        Object.entries(res['Technical Analysis: ADX']).forEach(([key, value], index) => {thisStockData.adxData.push(Number(value["4. close"]))});
                        $.ajax({
                            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
                            url:`https://www.alphavantage.co/query?function=ADX&symbol=${testsData[counter].Stock}&interval=weekly&time_period=10&apikey=${apiKey}`,
                            async: true,
                            dataType: 'json',
                            success:function(res){
                                console.log(res)
                                Object.entries(res['Technical Analysis: ADX']).forEach(([key, value], index) => {thisStockData.adxData.push(Number(value["4. close"]))});
                                allStockData.push(thisStockData)
                                console.log(allStockData)
        
                                counter++;
                                if (counter < 5) getData();
                            }
                        })
                    }
                })
            }
        })
}
    getData()
    // const apiEndpoint = apiUrl + "/pullSectors";
    console.log("pull test")
    // return http.get(apiEndpoint, {test: "testing pull"})
}