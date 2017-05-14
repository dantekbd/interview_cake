const myArray = [3, 4, 6, 10, 11, 15]
const alicesArray = [1, 5, 8, 12, 14, 19]

function mergeArrays(a, b) {

  let pointer = a.shift()
  const mergedArrays = []

  while (a.length > 0) {
    b.map((el) => {
      if (pointer <= el) {
        mergedArrays.push(pointer)
        pointer = a.shift()
      } else {
        mergedArrays.push(el)
      }
    })
  }

  return mergedArrays

}

console.log(mergeArrays(myArray, alicesArray))