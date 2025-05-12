

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.


let time = Number(prompt('Enter your current time (1 - 24)'))
let greetings;

if (time === 12){
    greetings = 'Good Morning'
    alert(greetings)
}
else if (time >= 1 && time < 12){
    greetings = 'Good Morning'
    alert(greetings)
}
else if (time >= 12 && time < 17){
    greetings = 'Good Afternoon'
    alert(greetings)
}
else{
    greetings = 'Good Evening'
    alert(greetings)
}