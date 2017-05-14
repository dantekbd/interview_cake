function reverseChars(chars) {
  
}

function reverseWords(words) {

  // return words.split(' ').reverse().join(' ')

  const chars = words.split('')
  const length = chars.length - 1
  const midway = (length + 1) / 2

  for (let i = 0; i < midway; i++) {
    let a = chars[i]
    let b = chars[length - i]
    chars[i] = b
    chars[length - i] = a
  }

  for (let i = 0; i < midway; i++) {
    let a = chars[i]
    let b = chars[length - i]
    chars[i] = b
    chars[length - i] = a
  }

  return chars.join('')

}

const message = 'find you will pain only go you recordings security the into if'

console.log(reverseWords(message))
// => if into the security recordings you go only pain will you find