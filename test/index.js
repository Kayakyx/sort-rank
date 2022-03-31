const sRank = require('../')

const data = [
  { name: 'Ken Morrow', goals: 13, assists: 13, points: 26 },
  { name: 'Mark Johnson', goals: 8, assists: 10, points: 18 },
  { name: 'Mike Ramsey', goals: 15, assists: 6, points: 21 },
  { name: 'Mike Eruzione', goals: 15, assists: 10, points: 21 },
  { name: 'Dave Silk', goals: 21, assists: 8, points: 29 }
]

const rankings = sRank({
  arr: data, key: 'points', order: 'desc', show_has_tie: true, limit: 3
})

console.log(rankings)
