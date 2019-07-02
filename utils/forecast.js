const request = require('request')



const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fced9d8054cb4b4924abf70cb6423af9/'+ latitude+ ',' +longitude+ '?units=si';
    request({url:url, json:true}, (error,response) => {
        if (error){
            callback('Unable to connect to weather service!',undefined)
        } else if (response.body.error) {
            callback('Unable to find location',undefined)
        }
        else {
            const msg = `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`
            callback(undefined,msg)
        }
    })
}

module.exports = forecast