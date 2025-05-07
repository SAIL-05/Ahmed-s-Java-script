
let fruits = ['apple', 'banana', 'orange', 'mango']

fruit.push("kiwi")
console.log(fruit);
fruit.pop()
console.log(fruit)
fruit.shift()

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

fruits.sort()

for(let fruit of fruits){
    console.log(fruit)
}

let numbers = [1,2,3,4,5,6,7]
let max = Math.max(...numbers)
let min = Math.min(...numbers)

console.log(max);
console.log(min);

let userName = 'Ahmed Suleiman'
let letters = [...userName].join('-')
console.log(letters);

let num1 = [1,2,3,4]
let num2 = [5,6,7,8]
let join = [...num1, ...num2, 'eggs', 78]
console.log(join);

const food1 = 'pizza'
const food2 = 'hotdog'
const food3 = 'sushi'
const food4 = 'ramen'
const food5 = 'hamburger'

function openFridge(...foods) {
  console.log(...foods)
}

function getFood(...foods){
  return foods
}

const foods = getFood(food1, food2, food3, food4, food5)
console.log(...foods)

openFridge(food1, food2, food3, food4, food5)

function sum(...numbers){
  let result = 0;
  for (number of numbers){
    result += number
  }
  return result;
}

let total = sum(1, 8 , 9 , 5, 4 , 0 , 3 ,6 );
console.log(`Your total amount is $${total}`);

