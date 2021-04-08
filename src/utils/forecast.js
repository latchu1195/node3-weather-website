const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=657d2835f5cede3b34311fb70d091b90&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("unable to find location", undefined)
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + " percent")
        }
    })
}

module.exports = forecast