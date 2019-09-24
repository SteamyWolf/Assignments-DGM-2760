// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress'];
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
    trees.splice(1,1)
    listTrees()
}

//Remove the last tree fromt the Array
document.querySelector('#remove_treeLast').onclick = () => {
    trees.pop()
    listTrees()
}

// Sort the Array from A to Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

// Make all the trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    
    listTrees()
}

//Get the name of tree number 3
document.querySelector('#showName3').onclick = () => {
    trees.
}