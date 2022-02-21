// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Birch']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of treess inside the displayResults div
const listTrees = () => {
   let treeList = '' 
   trees.forEach(tree => {
        treeList += `${tree} <br>`
   })
   displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
   if(trees.length === 0) { //error handling when all the trees are removed
       errorElement.textContent = 'No Trees on List, Get Planting!'
   }
}
listTrees()

//Add trees
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees() //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}

//Add a Pear to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear')
    listTrees() //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}

//sort method


//Error Handling

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees() //called to update list
    }
}