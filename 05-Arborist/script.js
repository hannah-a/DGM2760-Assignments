// Create an array with 4 trees listed
const trees = []
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of treess inside the displayResults div
function listTrees(tl) {
    let treeList = ''
    tl.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${tl.length} elements long</span>`
    if (tl.length === 0) { //error handling when all the trees are removed
        errorElement.textContent = 'No trees on list, get planting!'
    } else { errorElement.textContent = '' }

}
listTrees(trees)

//Add trees to start
document.querySelector('#green_ash1').onclick = () => {
    trees.unshift('Green Ash')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#b_e_maple1').onclick = () => {
    trees.unshift('Box Elder Maple')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#l_pine1').onclick = () => {
    trees.unshift('Lodgepole Pine')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#r_m_juniper1').onclick = () => {
    trees.unshift('Rocky Mountain Juniper')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#q_aspen1').onclick = () => {
    trees.unshift('Quaking Aspen')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}

//Add trees to end
document.querySelector('#green_ash2').onclick = () => {
    trees.push('Green Ash')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#b_e_maple2').onclick = () => {
    trees.push('Box Elder Maple')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#l_pine2').onclick = () => {
    trees.push('Lodgepole Pine')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#r_m_juniper2').onclick = () => {
    trees.push('Rocky Mountain Juniper')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#q_aspen2').onclick = () => {
    trees.push('Quaking Aspen')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}

//Remove Buttons
//Removes the First Item
document.querySelector('#remove_tree1').onclick = () => {
    trees.shift()
    listTrees(trees)
    //removes image if trees from list are removed
    if (trees.length == 0) {
        document.querySelector('.treeImg').innerHTML = ``
    }
}
//Removes the Second Item
document.querySelector('#remove_tree2').onclick = () => {
    trees.splice(1, 1)
    listTrees(trees)
    if (trees.length == 0) {
        document.querySelector('.treeImg').innerHTML = ``
    }
}
//Removes the Last Item
document.querySelector('#remove_treeLast').onclick = () => {
    trees.pop()
    listTrees(trees)
    if (trees.length == 0) {
        document.querySelector('.treeImg').innerHTML = ``
    }
}

//Sort by Alphabet
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees(trees)
}

//Make lowercase
document.querySelector('#lowerTrees').onclick = () => {
    const lowerList = trees.map(tree => tree.toLowerCase())
    listTrees(lowerList)
}

//function to display an image
function displayTrees(tree) {
    document.querySelector('.treeImg').innerHTML = `<img src="${tree}"/>`
    if (trees.length == 0) {
        document.querySelector('.treeImg').innerHTML = ``
    }
}

//button will display image on array 
document.querySelector('#showName1').onclick = () => {
    if (trees.length >= 1 && trees.length > 0) {
        selectImage(trees, 0)
    } else {
        errorElement.textContent = 'Add More Trees!'
        document.querySelector('.treeImg').innerHTML = ``
    }
}
document.querySelector('#showName2').onclick = () => {
    if (trees.length >= 2 && trees.length > 0) {
        selectImage(trees, 1)
    } else {
        errorElement.textContent = 'Add More Trees!'
        document.querySelector('.treeImg').innerHTML = ``
    }
}
document.querySelector('#showName3').onclick = () => {
    if (trees.length >= 3 && trees.length > 0) {
        selectImage(trees, 2)
    } else {
        errorElement.textContent = 'Add More Trees!'
        document.querySelector('.treeImg').innerHTML = ``
    }
}
document.querySelector('#showName4').onclick = () => {
    if (trees.length >= 4 && trees.length > 0) {
        selectImage(trees, 3)
    } else {
        errorElement.textContent = 'Add More Trees!'
        document.querySelector('.treeImg').innerHTML = ``
    }
}
document.querySelector('#showName5').onclick = () => {
    if (trees.length >= 5 && trees.length > 0) {
        selectImage(trees, 4)
    } else {
        errorElement.textContent = 'Add More Trees!'
        document.querySelector('.treeImg').innerHTML = ``
    }
}

//case statement that takes button chosen index to display the right image
function selectImage(tree, index) {
    let imgSrc = ``
    switch (tree[index]) {
        case 'Quaking Aspen':
            imgSrc = `/05-Arborist/images/aspen.jpg`
            displayTrees(imgSrc)
            break;
        case 'Green Ash':
            imgSrc = `/05-Arborist/images/greenash.jpg`
            displayTrees(imgSrc)
            break;
        case 'Box Elder Maple':
            imgSrc = `/05-Arborist/images/boxelder.jpg`
            displayTrees(imgSrc)
            break;
        case 'Lodgepole Pine':
            imgSrc = `/05-Arborist/images/pine.jpg`
            displayTrees(imgSrc)
            break;
        case 'Rocky Mountain Juniper':
            imgSrc = `/05-Arborist/images/juniper.jpg`
            displayTrees(imgSrc)
            break;
        default:
            errorElement.textContent = 'No trees on list, get planting!'
            break;
    }

}
