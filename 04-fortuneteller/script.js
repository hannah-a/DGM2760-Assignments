document.addEventListener('load', () => {document.onanimationend()})


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min) //rounds up to next integer
    max = Math.floor(max) //rounds down to nearest integer
    return Math.floor(Math.random() * (max - min +1)) + min //inclusive min, inclusive max because of Math.floor which makes the floating point number into next lowest integer
}
//assigning a month a random number 
let month = getRandomIntInclusive(1,12)
let day = getRandomIntInclusive(1,30)
//creates variable from switch statement for month
const monthName = getMonthName(month)
//creates variable from switch statement for fate

document.querySelector('#fortune')


//attributing a month to the random number
function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = 'January'
            break;
        case 2:
            name = 'Febuary'
            break;
        case 3:
            name = 'March'
            break;
        case 4:
            name = 'April'
            break;
        case 5:
            name = 'May'
            break;
        case 6:
            name = 'June'
            break;
        case 7:
            name = 'July'
            break;
        case 8:
            name = 'August'
            break;
        case 9:
            name = 'September'
            break;
        case 10:
            name = 'October'
            break;
        case 11:
            name = 'November'
            break;
        case 12:
            name = 'December'
        default:
            name = 'Not a Month'
            break;
    }
    return name
}
// returns a string based on the random index generated from getRandomIntInclusive
let list = ["find the love of your life", "have the best day ever because you found an oreo on the ground", "forget your coat", "create a beautiful work of art", "trip on a snowcone and fall in love with ice skating", "lie to your brother that you will return his item", "accidently run a 5k race and win", "meet the man of your dreams then wake up", "look into the sun and see jesus", "forget something important", "have the best day ever", "shrug off every negative vibe and shine bright like a diamond","never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell and lie and hurt you","have an epiphany about your life that leads you into a new direction", "witness something that make you think, 'Huh, that was...something'","switch your career path then change your mind and change back","realize a universal truth that the world has kept secret until now","get married but...not", "suffer a fatal case of cuteness"]
let fate = list[getRandomIntInclusive(0, list.length-1)]

//creates fortune from variables
const fortuneRevealed = `On ${monthName} ${day}, you will ${fate}.`
console.log(fortuneRevealed)

//inputs fortune into page
document.querySelector('#fortune').innerText = fortuneRevealed


// function getFortune(fate) {
//     let message
//     switch (fate) {
//         case 1:
//             message = "you will find the love of your life"
//             break
//         case 2:
//             message = "have the best day ever because you found an oreo on the ground"
//             break
//         case 3:
//             message = "forget your coat"
//             break
//         case 4:
//             message = "create a beautiful work of art"
//             break
//         case 5:
//             message = "trip on a snowcone and fall in love with ice skating"
//             break
//         case 6:
//             message = "lie to your brother that you will return his item"
//             break
//         case 7:
//             message = "accidently run a 5k race and win"
//             break
//         case 8:
//             message = "meet the man of your dreams then wake up"
//             break
//         case 9:
//             message = "look into the sun and see jesus"
//             break
//         case 10:
//             message = "forget something important"
//             break
//         case 11:
//             message = "have the best day ever"
//             break
//         case 12:
//             message = "shrug off every negative vibe and shine bright like a diamond"
//             break
//         case 13:
//             message = "never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell and lie and hurt you."
//             break
//         case 14:
//             message = "have an epiphany about your life that leads you into a new direction"
//             break
//         case 15:
//             message = "witness something that make you think, 'Huh, that was...something'"
//             break
//         case 16:
//             message = "switch you career path then change your mind and change back"
//             break
//         case 17:
//             message = "realize a universal truth that the world has kept secret until now"
//             break
//         case 18:
//             message = "get married but...not?"
//             break
//         case 19:
//             message = "realized you were right all along"
//             break
//         case 20:
//             message = "suffer a fatal case of cuteness"
//             break
//         default:
//             message = "The fortune teller cannot share your fate. It has already been...sealed"
//             break
//     }
//     return message
// }