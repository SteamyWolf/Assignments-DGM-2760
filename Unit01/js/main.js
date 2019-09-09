
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";

document.querySelector('#company').innerText = "Joe's Bed and Breakfast";

document.querySelector('header > h2').innerText = "Step into your new home!";

let userName = prompt("What is your name?");

// let message = "Hello " + userName + ", welcome to the best B&B you'll ever visit!";

let message = `Hello ${userName}, welcome to the best BnB you'll ever visit!`;

document.querySelector('#greeting').innerText = message;