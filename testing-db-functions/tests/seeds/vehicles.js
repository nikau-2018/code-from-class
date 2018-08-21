exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, make: 'Toyota', driver_id: 1},
        {id: 2, make: 'Honda', driver_id: 2},
        {id: 3, make: 'Subaru', driver_id: 3},
        {id: 4, make: 'Suzuki', driver_id: 2}
      ])
    })
}
