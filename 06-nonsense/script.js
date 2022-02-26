const button = document.querySelector('#createButton').addEventListener('click', (e) => { 
    e.stopPropagation() //stops the event handler from bubbling to the parent elements
    tellStory()
})

function tellStory() {

const nounsString = document.querySelector('#nouns').value 
const verbsString = document.querySelector('#verbs').value
const adjString = document.querySelector('#adjectives').value 

const nounArray = nounsString.toLowerCase().trim().split(/\s+/, 3)
const verbArray = verbsString.toLowerCase().trim().split(/\s+/, 3)
const adjArray  = adjString.toLowerCase().trim().split(/\s+/, 3)
console.log(nounArray, verbArray, adjArray)

const myStory = `Once upon a time in ${nounArray[0]}, the Minister of Health decreed that every ${adjArray[2]} ${nounArray[1]} would be confiscated. This is due to the fact that ${adjArray[0]} ${nounArray[2]}s ${verbArray[0]} in the park fountains. No one liked this new decree so they decided to ${verbArray[1]} the ${adjArray[1]} Minister of Health. Watching him ${verbArray[2]} in the fountain was the funniest thing to ever happen. The End.`
const storyDiv = document.querySelector('.story').textContent = myStory

}


