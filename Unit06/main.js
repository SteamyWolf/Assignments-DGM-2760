
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
 
    let storyArea = `Once upon a time, the mighty travelers ${nounArray[0]} and ${nounArray[1]} were
    summoned to the ${adjectiveArray[0]} castle but, alas, they were stopped in their
    tracks by ${nounArray[2]}. ${nounArray[2]} tried to ${verbArray[0]} ${nounArray[0]}
    and ${nounArray[1]} but it didn't work. So, instead they began to call ${nounArray[2]}
    a ${adjectiveArray[1]} loser! ${nounArray[2]} didn't like that very much so he put his
    hand in his ${adjectiveArray[2]} pocket and blew on his flute. ${nounArray[3]}, ${nounArray[4]}
    and ${nounArray[5]} all came running to his aid. "Stop!" they said! "Or else we will
    report you to King ${nounArray[6]}! ${nounArray[0]} and ${nounArray[1]} started to
    ${verbArray[1]} but it did not work. They were beheaded by King ${nounArray[6]}.`
    
    document.querySelector('#storyP').textContent = storyArea

}

document.querySelector('#storyButton').onclick = tellStory

console.log()