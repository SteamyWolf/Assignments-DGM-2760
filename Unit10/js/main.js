function duplicateMenu() {
    //get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    // create the new list items for the botom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' the textContent from upper menu to new menu 
            let textContentUpper = document.querySelector('#primaryNavigation').textContent
            console.log(textContentUpper)
            let bottomLink = document.querySelector('#smallNavArea')
            bottomLink.textContent = textContentUpper
        // append children to make them appear in the DOM
            newList.appendChild(newLI)
            newList.appendChild(newLink)
            bottomLink.appendChild(newList)
        
    })
}

duplicateMenu()


// let bottomLink = document.querySelector('#smallNavArea')
//         topList.textContent = bottomLink
//         console.log(topList.textContent)
//         bottomLink.appendChild(menuItem)