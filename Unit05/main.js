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