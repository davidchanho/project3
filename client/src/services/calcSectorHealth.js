import http from './httpService'
import { apiUrl } from '../config.json'
import auth from './authService'
import { pullSectorData } from './pullSectors'

export function calcSectorHealth(sectorData) {
    const userData = auth.getCurrentUser();
    console.log(sectorData);
    let allSectorHealthData =[]

    //constant values from user
        let fastSMA = Number(userData.userSettings.fastSMA)
        // console.log("fast SMA: " + fastSMA)
        let fastWeight = Number(userData.userSettings.fastWeight)/100
        // console.log("fast weight: " + fastWeight)
        let slowSMA = Number(userData.userSettings.slowSMA)
        // console.log("slow SMA: " + slowSMA)
        let slowWeight = Number(userData.userSettings.slowWeight)/100
        // console.log("slow weight: " + slowSMAWeight)
        let fastGreaterSlowWeight = Number(userData.userSettings.fastToSlowWeight)/100
        // console.log("fast to slow weight: " + fastToSlowWeight)
        let macdWeight = Number(userData.userSettings.MACDWeight)/100
        // console.log("macd weight: " + macdWeight)
        let adxWeight = Number(userData.userSettings.ADXWeight)/100
        // console.log("adx Weight: " + adxWeight)

    // calculated values 
        let fastSMAValue
        let slowSMAValue
        let fastSMALookbackValue
        let slowSMALookbackValue
        let macdValue

    // values with weightings applied
        let fastSMAPositiveSlopeWeighted
        let slowSMAPositiveSlopeWeighted
        let fastGreaterSlowWeighted
        let macdPositiveSlopeWeighted
        let adxValueWeighted


    // final score object for each sector
        let sectorAndHealthScore = {
            symbol: "",
            score: 0
        }
    
        let fastSMASum = 0
        let fastSMALookbackSum = 0
        let slowSMASum = 0
        let slowSMALookbackSum = 0
        let idCounter = 0
        
        for (let x = 0; x < sectorData.data.length; x++){
            sectorAndHealthScore.symbol = sectorData.data[x].indexName
            sectorAndHealthScore.id = idCounter
            // console.log(sectorAndHealthScore.symbol)

            //fast SMA pos slope?
                for(let i = 0; i<fastSMA;i++){fastSMASum+=sectorData.data[x].priceData[i]}
                fastSMAValue = fastSMASum/fastSMA
                // console.log("fastSMA Value: " + fastSMAValue)
            //fast SMA Lookback
                for(let i = 1; i<fastSMA+1;i++){fastSMALookbackSum+=sectorData.data[x].priceData[i]}
                fastSMALookbackValue = fastSMALookbackSum/fastSMA
                // console.log("fastSMA Lookback Value: " + fastSMALookbackValue)

            // fast SMA Positive slope check
                if((fastSMAValue) > (fastSMALookbackValue)){fastSMAPositiveSlopeWeighted=(1*fastWeight)}
                else{fastSMAPositiveSlopeWeighted=0}
            // console.log("fast SMA Pos Slope Weighted: " + fastSMAPositiveSlopeWeighted)

            //slow SMA pos slope?
                for(let i = 0; i<slowSMA;i++){slowSMASum+=sectorData.data[x].priceData[i]}
                slowSMAValue = slowSMASum/slowSMA
                // console.log("slowSMA Value: " + slowSMAValue)
            //slow SMA Lookback
                for(let i = 1; i<slowSMA+1;i++){slowSMALookbackSum+=sectorData.data[x].priceData[i]}
                slowSMALookbackValue = slowSMALookbackSum/slowSMA
                // console.log("slowSMA Lookback Value: " + slowSMALookbackValue)
            // slow SMA Positive slope check
                if((slowSMAValue) > (slowSMALookbackValue)){slowSMAPositiveSlopeWeighted=(1*slowWeight)}
                else{slowSMAPositiveSlopeWeighted=0}
                // console.log("slow SMA Pos Slope Weighted: " + slowSMAPositiveSlopeWeighted)

            //fast > Slow 
                if(fastSMAValue > slowSMAValue){fastGreaterSlowWeighted=(1*fastGreaterSlowWeight)}
                else{fastGreaterSlowWeighted=0}
                // console.log("fast greater Slow weighted: " + fastGreaterSlowWeighted)

            //MACD Pos slope?
                if (sectorData.data[x].macdData[0] > sectorData.data[x].macdData[1]){macdPositiveSlopeWeighted = (1*macdWeight)}
                else{macdPositiveSlopeWeighted = 0}
                // console.log("macd pos slope weighted: " + macdPositiveSlopeWeighted)

            // apply ADX?
                if ((slowSMAValue > slowSMALookbackValue)){adxValueWeighted=(sectorData.data[x].adxData[0]*adxWeight/100)}
                else{adxValueWeighted=0}

                sectorAndHealthScore.score = (fastSMAPositiveSlopeWeighted + slowSMAPositiveSlopeWeighted + fastGreaterSlowWeighted + macdPositiveSlopeWeighted + adxValueWeighted)
            
            
            allSectorHealthData.push(sectorAndHealthScore)

            idCounter++
            fastSMAValue = 0
            slowSMAValue = 0
            fastSMALookbackValue = 0
            slowSMALookbackValue = 0
            fastSMASum = 0
            fastSMALookbackSum = 0
            slowSMASum = 0
            slowSMALookbackSum = 0
            fastSMAPositiveSlopeWeighted = 0
            slowSMAPositiveSlopeWeighted = 0
            fastGreaterSlowWeighted = 0
            macdPositiveSlopeWeighted = 0
            adxValueWeighted = 0

            sectorAndHealthScore = {
                symbol: "",
                score: 0
            }            
        }

    // console.log("SECTORS & SCORES...")
    // console.log(allSectorHealthData)

    return allSectorHealthData
  }