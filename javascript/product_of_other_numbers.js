// You have an array of integers, and for each index you want to find the 
// product of every integer except the integer at that index. Write a function 
// getProductsOfAllIntsExceptAtIndex() that takes an array of integers and 
// returns an array of the products.

function productOfOtherNumbers(arrayOfInts) {

  const length = arrayOfInts.length
  const productBefore = Array(length).fill(1)
  const productAfter = productBefore.slice(0)
  const output = []

  // [1, 1, 7, 21]
  for (let i = 1; i < length; i++) {
    productBefore[i] = productBefore[i - 1] * arrayOfInts[i - 1]
  }

  // [84, 12, 4, 1]
  for (let i = length - 2; i >= 0; i--) {
    productAfter[i] = productAfter[i + 1] * arrayOfInts[i + 1]
  }

  for (let i = 0; i < arrayOfInts.length; i++) {
    output.push(productBefore[i] * productAfter[i])
  }

  return output

}

console.log(productOfOtherNumbers([1, 7, 0, 4])) // => [0, 0, 28, 0]