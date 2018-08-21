exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('drivers').del()
    .then(function () {
      // Inserts seed entries
      return knex('drivers').insert([
        {id: 1, name: 'Bryce'},
        {id: 2, name: 'Rich'},
        {id: 3, name: 'Emily'}
      ])
    })
}
