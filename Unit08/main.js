const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Wyatt",
    option2: "Camille",
    option3: "Grant",
    option4: "Cyprus",
    correct: 3,
    display: () => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#answer1').textContent = question.option1;
        document.querySelector('#answer2').textContent = question.option2;
        document.querySelector('#answer3').textContent = question.option3;
        document.querySelector('#answer4').textContent = question.option4;
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = "You are Correct! Congratulations!"
        } else {
            document.querySelector('.feedback').textContent = "You are Wrong! Try Again!"
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()