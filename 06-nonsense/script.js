const button = document.querySelector('#createButton').addEventListener('click', (e) => { 
    e.stopPropagation() //stops the event handler from bubbling to the parent elements
    tellStory()
})

function tellStory() {
//const nounArray = querySelector('.nouns')
const nounsString = document.querySelector('#nouns').value 
const verbsString = document.querySelector('#verbs').value
const adjString = document.querySelector('#adjectives').value 
console.log(nounsString, verbsString, adjString)



// const myStory = `Once upon a time in ${noun[0]}, the Minister of Health decreed that every ${noun[1]} would be confiscated. This is due to the fact that ${adjective[0]} ${noun[2]} ${verb[0]} in the park fountains. No one liked this new decree so they decided to ${verb[1]} the ${adjective[1]} Minister of Health. Watching him ${verb[2]} in the ${adjective[2]} was the funniest thing to ever happen. The End`
console.log('working button')
//get a reference to the querySelector('#story')
}

//noun0 to uppercase
//noun2 needs plural
//splice the arrays so theres no more than 3 per array
//create error message when someone inputs more than three words, or inputs other characters
