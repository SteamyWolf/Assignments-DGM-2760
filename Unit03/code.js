

let correctNumber = Math.floor(Math.random() * 15)

let guess = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber +=1

console.log(`The correct number is ${correctNumber}`);

function evalGuess() {
    totalGuesses +=1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess);
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log("You guessed correctly")
        feedback.innerText = 'Correct!'
        giveAward();
        
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high, try again';
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Sorry too low, try again'
    } else {
        feedback.innerText = 'Please choose a number between 0 and 16';
        totalGuesses -= 1
    } 

    document.querySelector('#attempts').innerText = totalGuesses;
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blueribbon-resize.png'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/redribbon-resize.png'
            break;
    }

    if (totalGuesses > 6) {
        imagePath = 'images/yellowribbon-resize.png'
        
    }
    

    const awardImage = document.createElement('img');
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')
    ribbon.append(awardImage);

    document.getElementById('buttonID').setAttribute("disabled", "disabled");
    }

// function button() {
    //let buttonPress = document.querySelector('#buttonID').event
   // if (buttonPress.onclick > 2) {
     //   imagePath = 0;
    //}

//}

    // const blueRibbon = new Image(100, 100);
   // blueRibbon.src = 'images/101186.jpg';
    //document.querySelector('#ribbon').innerText = blueRibbon;
    // addToDiv = document.body.appendChild(blueRibbon);
