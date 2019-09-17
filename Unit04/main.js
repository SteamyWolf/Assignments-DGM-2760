function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

console.log(getRandomIntInclusive(1, 12));

let month = getRandomIntInclusive(1,12);
let fate = getRandomIntInclusive(1,12);
let day = getRandomIntInclusive(1,30);

function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
            name = "This is not a month"
            break;
    }
    return name
  }

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "become the strongest person alive."
            break;
        case 2:
            message = "turn into a wolf with a flaming sword on your back."
            break;
        case 3:
            message = "be performing yoga in the woods when a Tree Ent eats you."
            break;
        case 4:
            message = "turn into a cloud and feed nations with your rain."
            break;
        case 5:
            message = "be struck by lightning and gain the powers of Thor."
            break;
        case 6:
            message = "fall into the arms of your true love. They will be the person to your right."
            break;
        case 7:
            message = "be seduced by a dwarf."
            break;
        case 8:
            message = "be smothered by a million puppies...and die."
            break;
        case 9:
            message = "wake up only to realize you have never existed. So how did you wake up?"
            break;
        case 10:
            message = "fall in love with an elf."
            break;
        case 11:
            message = "Get A's in all of your classes. Except your coding class."
            break;
        case 12:
            message = "have a billion dollars fall right onto your lap, thus crushing you to death."
            break;
        default:
            message = "An error with your fortune has occured. Try again."
            break;
    }
    return message
}

const monthName = getMonthName(month);
const fateMessage = getFortune(fate);

const fateRevealed = `On ${monthName} ${day}, you will ${fateMessage}`;

document.querySelector('#fortune').innerText = fateRevealed;

console.log(fate);