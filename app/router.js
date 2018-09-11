'use strict'

const index = require('./index')
// Local dependencies
const healthcheck = require('./api/healthcheck')

// Welcome dependencies
const welcome = require('./welcome')

//Register dependencies
const registerUser = require('./register/user')

//Aircraft dependencies
const aircraftdetail = require('./garfile/aircraft')

//Departure dependencies
const departuredetail = require('./garfile/departure')

//Arrival dependencies
const arrivaldetail = require('./garfile/arrival')

//Additional dependencies
//const additionaldetail = require('./garfile/additionaldetails')

// Export
module.exports.bind = app => {
    app.use(healthcheck.router)
    app.use(index.router)
    app.use(welcome.router)
    app.use(registerUser.router) 
    app.use(aircraftdetail.router)
    app.use(departuredetail.router)
    app.use(arrivaldetail.router)
    //app.use(additionaldetail.router)

}