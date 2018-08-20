const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getDrivers()
    .then(displayDrivers)
    .catch(displayError)

  function displayDrivers (drivers) {
    res.render('home', {
      drivers
    })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

router.get('/vehicles', (req, res) => {
  db.getDriverVehicles()
    .then(displayVehicles)
    .catch(displayError)

  function displayVehicles (vehicles) {
    console.log('vehicles', vehicles)
    res.render('vehicles', {
      vehicles
    })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
