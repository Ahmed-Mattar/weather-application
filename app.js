const request = require('request')

const url = 'https://api.darksky.net/forecast/fced9d8054cb4b4924abf70cb6423af9/37.8267,-122.4233';

request({url: url},(error, response,body)=>{
    const data = JSON.parse(body);
    console.log(data.currently)
})