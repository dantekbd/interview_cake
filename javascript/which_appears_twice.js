// I have an array where every number in the range 1...n appears once except for 
// one number which appears twice. Write a function for finding the number that 
// appears twice

function findDuplicate(numRange) {

  let length = numRange.length - 1
  let targetSum = 0.5 * length * (length + 1)
  return numRange.reduce((a, b) => a + b, -targetSum)

}

console.log(findDuplicate([4, 7, 9, 3, 6, 1, 2, 5, 3, 8])) // => 3