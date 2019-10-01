
// let nounString = document.querySelector('#nounTextArea').value
// let adjectiveString = document.querySelector('#adjectiveTextArea').value
// let verbString = document.querySelector('#verbTextArea').value


function tellStory() {
    let nounString = document.querySelector('#nounTextArea').value
    nounString.toLowerCase()
    nounArray = nounString.split(/\s+/)
    
    let adjectiveString = document.querySelector('#adjectiveTextArea').value
    adjectiveString.toLowerCase()
    adjectiveArray = adjectiveString.split(/\s+/)

    let verbString = document.querySelector('#verbTextArea').value
    verbString.toLowerCase()
    verbArray = verbString.split(/\s+/)
 
    let storyArea = `Once upon a time ${nounArray[0]} slapped test 
    cuz the ${adjectiveArray[0]} man was in his way so they ${verbArray[0]} him`;
    
    document.querySelector('#storyP').textContent = storyArea

}

document.querySelector('#storyButton').onclick = tellStory

console.log()