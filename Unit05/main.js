// Create an array with 4 trees listed
let trees = ['oak', 'Pine', 'aspen', 'Bald Cypress'];
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults');

// Display the list of trees in the diplayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long </span>`
}

listTrees()

// Add a redwood
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

// Add a Pear to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear')
    listTrees()
}

// Remove the first item in the Array
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = "Error! No more trees to remove"; 
    }
    
}

//Remove the second tree from the Array
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1,1)
        listTrees()
    } else {
        errorElement.textContent = 'Error! Cannont remove the second tree'
    }
    
}

//Remove the last tree fromt the Array
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'No more trees in the box to remove!'
    }
    
}

// Sort the Array from A to Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

// Make all the trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.join(" <br>").toLowerCase()
    trees = trees.split(" ,")
    console.log(trees.length)
    listTrees()
}

//Get the name of tree number 3
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        let thirdTree = trees[2]
        errorElement.textContent = thirdTree
        listTrees()
    } else {
        errorElement.innerHTML = "You need a third tree in the list to get the name. <br> Add some more trees!"
    }
   
}

// Get the name of tree number 4
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        let fourthTree = trees[3]
        errorElement.textContent = fourthTree
        console.log(trees.length)
        listTrees()
    } else {
        errorElement.innerHTML = 'You need a fourth tree in the list to get the name. <br> Add some more trees!';
    }

}