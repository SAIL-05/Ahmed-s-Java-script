

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0


let amount = parseFloat(prompt('Enter your amount'))
let discount;
let total;

if (amount >= 100){
    discount = 20
    total = amount - discount
    alert(`Your total price is $${total}`)
}
else if (amount >= 50){
    discount = 10
    total = amount - discount
    alert(`Your total price is $${total}`)
}
else {
    alert(`To get a discount please purchase something above $50 to get a discount, or Please check Out😊😊😊`)
}