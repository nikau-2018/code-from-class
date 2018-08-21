exports.seed = (knex, Promise) => {
  return knex('products').del()
    .then(() => {
      return knex('products').insert([
        {id: 99901, name: 'Shoes'},
        {id: 99902, name: 'Shirts'},
        {id: 99903, name: 'Shorts'}
      ])
    })
}
