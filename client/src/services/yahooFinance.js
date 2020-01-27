const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key":"31d1e22625msh0d27ce9220d6290p13cfdfjsn3e5237afdbdf"
    },"params":{
    "region":"US",
    "symbol":"AMRN"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })