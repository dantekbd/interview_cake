function bracketValidator(brackets) {

  const stack = []

  return brackets.split('').every((b) => {
    if ('({['.indexOf(b) > -1) {
      stack.push(b)
    } else {
      if (stack.length === 0) {
        return false
      }
      let openingBracket = stack.pop()
      if (Math.abs(openingBracket.charCodeAt(0) - b.charCodeAt(0)) > 2) {
        return false
      }
    }
    return true
  },[])

}

console.log(bracketValidator('{[]()}')) //=> true
console.log(bracketValidator('[(])}')) //=> false
console.log(bracketValidator('{[}')) //=> false