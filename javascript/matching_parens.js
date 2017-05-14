function matchingParens(stringWithParens, openingParens) {

  const stack = [] // can instead just keep track with a single integer
  let closingParens

  for (let i = openingParens; i < stringWithParens.length; i++) {
    if (stringWithParens[i] === '(') {
      stack.push('(')
    } else if (stringWithParens[i] === ')') {
      if (!!stack.length) {
        stack.pop()
        if (!stack.length) {
          closingParens = i
          break
        }
      } else {
        break // not valid
      }
    }
  }

  return closingParens

}

const stringWithParens = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.'
const openingParens = 10
console.log(matchingParens(stringWithParens, openingParens)) // => 79