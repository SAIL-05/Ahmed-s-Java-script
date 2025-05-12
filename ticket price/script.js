

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.



let age = Number(prompt('How old are you ?'))
let ticketPrice;

if (age >= 60){
    ticketPrice = 15
    alert(`Your Ticket Price is ${ticketPrice}`)
}
else if (age < 60 && age >= 18 ){
    ticketPrice = 20
    alert(`Your Ticket Price is ${ticketPrice}`)
}
else if (age < 18 && age >= 12){
    ticketPrice = 10
    alert(`Your Ticket Price is ${ticketPrice}`)
}
else if (age < 12 && age >= 1){
    ticketPrice = 5
    alert(`Your Ticket Price is ${ticketPrice}`)
}
else{
    alert('Please enter a valid age to get a ticket')
}

