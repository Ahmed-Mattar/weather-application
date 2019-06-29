const request = require('request')

const url = 'https://api.darksky.net/forecast/fced9d8054cb4b4924abf70cb6423af9/37.8267,-122.4233?units=si&lang=es';

request({url: url, json: true},(error, response,body)=>{
    
    //console.log(response.body.currently)
    const msg = `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`

    console.log(msg)
})