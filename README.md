
> Rank an array of objects with support for value ties and tie breakers

## Install

```
$ npm install sort-rank
```

## Usage

```js
const sRank = require('sort-rank')

// Input data
const data = [
  { name: 'Ken Morrow', goals: 13, assists: 13, points: 26 },
  { name: 'Mark Johnson', goals: 8, assists: 10, points: 18 },
  { name: 'Mike Ramsey', goals: 15, assists: 6, points: 21 },
  { name: 'Mike Eruzione', goals: 15, assists: 10, points: 21 },
  { name: 'Dave Silk', goals: 21, assists: 8, points: 29 }
]

const options = {
  arr: data,
  key: 'points'
}

const rankings = sRank(options)

console.log(rankings)

// [
//   { name: 'Dave Silk', goals: 21, assists: 8, points: 29, rank: 1 },
//   { name: 'Ken Morrow', goals: 13, assists: 13, points: 26, rank: 2 },
//   { name: 'Mike Ramsey', goals: 15, assists: 6, points: 21, rank: 3, has_tie: true },
//   { name: 'Mike Eruzione', goals: 15, assists: 10, points: 21, rank: 3, has_tie: true },
//   { name: 'Mark Johnson', goals: 8, assists: 10, points: 18, rank: 4 }
// ]

```

## Options

Ranky takes a single parameter that is used to specify a few options when ranking the array of data.

#### arr _(required)_

Type: `array`

The array of objects that will be ranked.

#### key _(required)_

Type: `string`

The key used for sorting the objects within the array.

#### limit

Type: `number`

Take rank a few, a negative limit can be used.

#### order

Type: `string`

Default `desc`

Must be either `asc` or `desc`!

#### show_has_tie

Type: `boolean`

Default `true`

Show `has_tie` properties.

## License

ISC
