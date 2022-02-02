
let correctNumber = Math.floor(Math.random() * 15)



let guessed = false
let totalGuesses = 0 
let gamerGuess = 0 
correctNumber += 1

console.log(` the correct number is ${correctNumber}`)

function attemptInput() {
    totalGuesses += 1 // increments totalGuesses +1 for every guess
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback') // handle for the too low or too high variable

    if (gamerGuess == correctNumber) {
        feedback.innerText = 'Correct!'
        giveAward()
    } else if(gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too High, Try Again'
    } else if(gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too Low, Try Again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again'
        totalGuesses -= 1
    }
    document.querySelector(".attemptNumber").innerText = totalGuesses
}

function giveAward() {
    console.log('congrats')
    let imagePath = "#"
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blueribbon.png'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/redribbon.png'
            break;
        default: //default yellow ribbon for all guesses higher than 6 
            imagePath = 'images/yellowribbon.jfif'
            break;
    }


const awardImage = document.createElement('img') //Ribbon images for scoring system html: div.results
awardImage.setAttribute('src', imagePath) // "../images/blueribbon"
const resultsDiv = document.querySelector('#results')

resultsDiv.appendChild(awardImage)
}

//only appendChild if the ribbon element does not have any childnodes