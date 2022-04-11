function duplicateMenu() {
    //get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    //not an array, a NodeList, has array like behavior. 
    //create the new list items for the bottom of the page
    let newList = document.createElement('ul')
    let newNav = document.querySelector('#smallNavArea')
    topList.forEach(menuItem => {
        let newLi= document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        //'copy' the textContent from upper menu to new menu
        //append children to make them appear in the DOM
        newLink.textContent = menuItem.textContent
        console.log(newLink.textContent)
        newLi.appendChild(newLink)
        newList.appendChild(newLi)
    })
    newNav.appendChild(newList)
}

duplicateMenu()
