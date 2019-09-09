document.querySelector('header > h1').innerText = "Inspector Pikachu";
document.querySelector('header > h2').innerText = "Pika Pika?";

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`;

    let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display`;

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`

}
reDisplay();

document.querySelector('#urlDisplay').innerText = `The URL for this page is ${window.location}`;



let docTitle = `The title of this document is ${document.title}.`;
let docUpdate = `This page was last updated on ${document.lastModified}.`
let docProp = document.querySelector('#myDocument').innerText = `${docTitle} \n ${docUpdate}`;
