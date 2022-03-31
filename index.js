/**
 * Rank an array of objects with support for value ties and tie breakers
 * @param option
 * @param {{}[]} option.arr - the array of objects that will be ranked
 * @param {string} option.key - the key used for sorting the objects within the array
 * @param {number} option.limit - take rank a few, a negative limit can be used
 * @param {string} [option.order = 'desc'] - must be either asc or desc
 * @param {boolean} [option.show_has_tie = true] - show has_tie properties
 * @return {{}[]}
 */
function sortRank (option) {
  const { arr, key, limit, order = 'desc', show_has_tie = true } = option
  if (!arr) throw new Error(`'option.arr' is required`)
  if (!key) throw new Error(`'option.key' is required`)
  if (!['asc', 'desc'].includes(order)) {
    throw new Error(`'option.order' must have the value 'asc 'or 'desc'`)
  }
  const copyArr = JSON.parse(JSON.stringify(arr))
  copyArr.sort((a, b) => {
    if (order === 'asc') {
      return a[key] - b[key]
    } else if (order === 'desc') {
      return b[key] - a[key]
    }
  })
  copyArr.forEach((curr, index) => {
    const prev = index === 0 ? null : copyArr[index - 1]
    if (!prev) {
      curr.rank = 1
    } else if (prev[key] === curr[key]) {
      curr.rank = prev.rank
      if (show_has_tie) {
        prev.has_tie = true
        curr.has_tie = true
      }
    } else {
      curr.rank = prev.rank + 1
    }
  })
  if (typeof limit !== 'number' || limit === 0) {
    return copyArr
  } else if (limit > 0) {
    return copyArr.filter(item => item.rank <= limit)
  } else {
    return copyArr.filter(item => item.rank > copyArr[copyArr.length - 1].rank + limit)
  }
}

module.exports = sortRank
