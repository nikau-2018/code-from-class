const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
  getDrivers,
  getDriverVehicles
}

function getDrivers () {
  return conn('drivers').select()
}

function getDriverVehicles () {
  return conn('drivers')
    .join('vehicles', 'drivers.id', 'vehicles.driver_id')
    .select('drivers.name', 'vehicles.make')
}
