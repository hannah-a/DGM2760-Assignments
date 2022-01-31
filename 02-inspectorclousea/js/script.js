document.querySelector('header > div > h1').innerText = 'Inspector Clouseau'
document.querySelector('header > div > h2').innerText = 'Private Detective at your service monsier!'

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top.`
let myWindow = document.querySelector('#myWindow').innerText = windowSizes + ` ` + offset  

window.onresize = function(){
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top.`
    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + ` ` + offset    
}

let myDocument = document.querySelector('#myDocument')
.innerText = `My website ${document.title} was last updated: ${document.lastModified}`

let url = document.createElement('p').innerText = `${window.location.href}`
let content = document.querySelector('.content')
content.append(url)