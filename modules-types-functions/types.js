const n = 4 * 'abc'

const t = typeof n

if (t === 'number' && !isNaN(n)) {
  console.log('woohoo', n)
} else {
  console.log('hmm')
}
