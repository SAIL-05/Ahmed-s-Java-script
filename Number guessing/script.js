

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

let answer = 50
let guess = Number(prompt(`Enter your lucky number`))

if (guess < answer) {
    alert('Not lucky, try something HIGHER')
}
else if (guess > answer) {
    alert('Not lucky, try something LOWER')
}
else {
    alert(`you are lucky, the number is ${answer}`)
}