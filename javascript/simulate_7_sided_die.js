// this is a blackbox for us
function rand5() {
  return Math.floor(Math.random() * 5) + 1
}

function simulate7SidedDie() {

  // results come from ((rand5() + rand5()) % 7) + 1
  const results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 1, 2, 3, 4]
  ]

  let row = rand5() - 1
  let column = rand5() - 1

  return (row < 4 && column < 1) ? results[row][column] : simulate7SidedDie()

}

console.log(simulate7SidedDie())