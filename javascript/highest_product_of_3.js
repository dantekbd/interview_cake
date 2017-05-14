// Given an array of integers, find the highest product you can get from three 
// of the integers. The input arrayOfInts will always have at least three 
// integers.

function highestProduct(arrayOfInts) {

  let highest = 0

  // this only works if numbers are in acsending/descending order
  for (let i = 0, max = arrayOfInts.length; i < max; i++) {
    let a = arrayOfInts[i]
    let b = arrayOfInts[i += 1 % max]
    let c = arrayOfInts[i += 1 % max]
    let product = a * b * c
    if (product > highest) {
      highest = product
    }
  }


  return highest

}

console.log(highestProduct([5, 4, 3, 2, 1])) // => 60