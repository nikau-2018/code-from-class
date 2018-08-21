const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
  getDrivers,
  getDriverVehicles
}

function getDrivers (db = conn) {
  return db('drivers').select()
}

function getDriverVehicles (db = conn) {
  return db('drivers')
    .join('vehicles', 'drivers.id', 'vehicles.driver_id')
    .select('drivers.id as driverId', 'vehicles.id as vehicleId', 'drivers.name', 'vehicles.make')
}
