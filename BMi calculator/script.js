let height = parseInt(prompt('Enter the HEIGHT'))
let  weight = parseInt(prompt('Enter the WEIGHT'))
let bmi = weight / (height * height)

if (bmi < 18.5){
    alert(`you are underweight ${bmi.toFixed(2)}`)
}
else if (bmi > 18.5 && bmi <= 24.9){
    alert(`you are healthy ${bmi.toFixed(2)}`)
}
else if (bmi >= 25 && bmi <= 29.9){
    alert(`you are overweight ${bmi.toFixed(2)}`)
}
else{
    alert('invalid')
}