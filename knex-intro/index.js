const knex = require('knex')
const config = require('./knexfile').development

const conn = knex(config)

conn('tasks')
  .select('id', 'title', 'is_complete as isComplete')
  .then(tasks => {
    tasks.forEach(task => {
      console.log(`${task.id}: ${task.title} - ${task.isComplete}`)
    })
  })
  .then(() => {
    conn.destroy()
  })
