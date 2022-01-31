
document.querySelector('#company').innerText = "Joe's"
document.querySelector('header > h2').innerText = "Bed and Breakfast: Best in Virginia!"

let userName = prompt('What is your name?')

let message = `Hello ${userName}, welcome to Joe's! Enjoy your stay. `

document.querySelector('#greeting').innerText = message

