function nthFibonacci(num) {

  let prev = 0
  let curr = 1
  let output = 0
  let counter = 1

  if (num < 2) {
    output = num
  }

  while (counter < num) {
    output = prev + curr
    prev = curr
    curr = output
    counter++
  }

  return output

}

console.log(nthFibonacci(0)) // => 0
console.log(nthFibonacci(1)) // => 1
console.log(nthFibonacci(2)) // => 1
console.log(nthFibonacci(3)) // => 2
console.log(nthFibonacci(4)) // => 3
console.log(nthFibonacci(5)) // => 5
console.log(nthFibonacci(6)) // => 8