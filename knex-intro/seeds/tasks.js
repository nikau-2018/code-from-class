exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(() => {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, title: 'run seeds', is_complete: false},
        {id: 2, title: 'have fun', is_complete: true},
        {id: 3, title: 'deploy', is_complete: false}
      ])
    })
}
