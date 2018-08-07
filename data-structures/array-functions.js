const results = require('./results.json')

const filtered = results.filter(result => result.id > 300)

console.log(filtered[0].name)

const found = results.find(result => result.xeroPlan === 'starter')

console.log(found.name)

const addOns = results.map(result => result.addOns)

console.log(addOns)

const increased = addOns.map(addOn => {
  return {
    gstReview: addOn.gstReview + 100
  }
})

console.log(increased)

const total = results.reduce((acc, result) => {
  return acc + result.addOns.gstReview
}, 0)

console.log('total', total)
