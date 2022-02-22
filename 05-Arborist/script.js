// Create an array with 4 trees listed
const trees = []
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of treess inside the displayResults div
/* const treeListArray = []
treeListArray.forEach(tree => {
    if (!treeListArray.includes(tree)) {
         treeListArray.push(tree)
    } else {
        errorElement.textContent = 'You already added that tree!'
    }
}) */
function listTrees(tl) {
    let treeList = ''
    // let treeListArray = []
    /* tl.forEach(tree => {
        if (!treeListArray.includes(tree)) {
             treeListArray.push(tree)
        } else {
            errorElement.textContent = 'You already added that tree!'
        }
    }) */
    tl.forEach(tree => {
             treeList += `${tree} <br>`
    })
    
    displayResults.innerHTML = `${treeList} <span>${tl.length} elements long</span>`
    if (tl.length === 0) { //
        errorElement.textContent = 'No trees on list, get planting!'
    } else if(tl.length === 5) {
        setTimeout(() => { errorElement.textContent = ``; }, 2000) //Makes the adding trees warning not stick on the page
    }
}
listTrees(trees)

//Add trees to start
document.querySelector('#green_ash1').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Green Ash')) {
        trees.unshift('Green Ash')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    // trees.unshift('Green Ash')
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#b_e_maple1').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Box Elder Maple')) {
        trees.unshift('Box Elder Maple')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#l_pine1').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Lodgepole Pine')) {
        trees.unshift('Lodgepole Pine')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#r_m_juniper1').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Rocky Mountain Juniper')) {
        trees.unshift('Rocky Mountain Juniper')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#q_aspen1').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Quaking Aspen')) {
        trees.unshift('Quaking Aspen')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}

//Add trees to end
document.querySelector('#green_ash2').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Green Ash')) {
        trees.push('Green Ash')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#b_e_maple2').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Box Elder Maple')) {
        trees.push('Box Elder Maple')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#l_pine2').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Lodgepole Pine')) {
        trees.push('Lodgepole Pine')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#r_m_juniper2').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Rocky Mountain Juniper')) {
        trees.push('Rocky Mountain Juniper')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
    listTrees(trees) //calling when it loads, and calling it when it pushes and adds trees. Option shift A for block comments
}
document.querySelector('#q_aspen2').onclick = () => {
    errorElement.textContent = ''
    if (!trees.includes('Quaking Aspen')) {
        trees.push('Quaking Aspen')
   } else {
       errorElement.textContent = 'You already added that tree!'
   }
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
