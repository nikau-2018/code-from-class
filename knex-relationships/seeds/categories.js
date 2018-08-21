exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(() => {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 88801, name: 'Tops'},
        {id: 88802, name: 'Bottoms'},
        {id: 88803, name: 'Footwear'}
      ])
    })
}
