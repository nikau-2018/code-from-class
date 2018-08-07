const data = require('./data.json')

const code = data.statusCode
const basePlan = data.query.basePlan
const name = data.results[0].name
const extra = data.results[1].addOns.extraSoftware

console.log(extra)