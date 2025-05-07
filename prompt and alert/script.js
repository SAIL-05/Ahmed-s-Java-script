let number = Number(prompt('Enter a Number'))

if (number > 0){
    alert(`${number} is a positive number`)
}
else if (number === 0){
    alert(`${number} is invalid`)
}
else if (number.toString()){
    alert(`is not a number`)
}
else{
    alert(`${number} is a negative number`)
}


let num1 = Number(prompt('enter num1'))
let num2 = Number(prompt('enter num2'))

if (num1 > num2){
    alert(`${num1} is greater than ${num2}`)
}
else if (num1 === num2){
    alert(`${num2} and ${num1} is equal `)
}
else if (num1.toString() || num2.toString()){
    alert(`please input just a number`)
}
else {
    alert(`${num2} is greater than ${num1}`)
}


let grade = Number(prompt('Enter your Grade'))

if (grade >= 70 && grade <= 100){
    alert(`you scored ${grade} A`)
}
else if (grade >= 60 && grade <= 69 ){
    alert(`you scored ${grade} B`)
}
else if (grade >= 50 && grade <= 59 ){
    alert(`you scored ${grade} C`)
}
else if (grade >= 45 && grade <= 49 ){
    alert(`you scored ${grade} D`)
}
else if (grade >= 40 && grade <= 44 ){
    alert(`you scored ${grade} E`)
}
else if (grade > 0 && grade <= 39 ){
    alert(`you scored ${grade} F`)
}
else if (grade.toString()){
    alert(`your score is not a number`)
}
else {
    alert(`you scored ${grade} is invalid`)
}