const request = require('request')

const url = 'https://api.darksky.net/forecast/fced9d8054cb4b4924abf70cb6423af9/37.8267,-122.4233?units=si&lang=es';

// request({url: url, json: true},(error, response)=>{
    
//     //console.log(response.body.currently)
//     const msg = `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`

//     console.log(msg)
// })

// Geocoding
// Address -> Lat/Long -> Weather
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF0dGFyMDAiLCJhIjoiY2p4aDFtYXJyMWNhYTQxbDdiYnE3aTZmdCJ9.mmkOe0aGKj6XqzInIBJH8g&limit=1"
request({url:geocodeURL, json: true}, (error,response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude,longitude)

})