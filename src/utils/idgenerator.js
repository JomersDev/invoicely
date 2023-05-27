const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Generate 2 random letters
function generateLetters(length) {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()* characters.length))
  }
  return result
}

// Generate a 4 digit random number
function generateNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Combine the two functions above to generate and ID with 2 random letters and a random 4 digit number
export default function generateID(length, min, max) {
	return generateLetters(length) + generateNumbers(min, max)
}