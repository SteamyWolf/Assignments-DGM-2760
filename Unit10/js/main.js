function duplicateMenu() {
    //get all of the anchor elemnts from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    // create the new list items for the botom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' the textContent from upper menu to new menu 
        let bottomLink = document.querySelector('#smallNavArea')
        topList.textContent = bottomLink
            console.log(topList.textContent)
        // append children to make them appear in the DOM
        menuItem.appendChild(newLI)
        menuItem.appendChild(newLink)
        menuItem.appendChild(newList)
       
        
    })
}

duplicateMenu()


// let bottomLink = document.querySelector('#smallNavArea')
//         topList.textContent = bottomLink
//         console.log(topList.textContent)
//         bottomLink.appendChild(menuItem)