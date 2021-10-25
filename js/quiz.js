let inOneEl = document.getElementById("in-one");
let inTwoEl = document.getElementById("in-two");
let inThreeEl = document.getElementById("in-three");
let inFourEl = document.getElementById("in-four");
let oneCorrectedEl = document.getElementById("one-corrected");
let twoCorrectedEl = document.getElementById("two-corrected");
let threeCorrectedEl = document.getElementById("three-corrected");
let fourCorrectedEl = document.getElementById("four-corrected");
let oneAnswerEl = document.getElementById("one-answer");
let twoAnswerEl = document.getElementById("two-answer");
let threeAnswerEl = document.getElementById("three-answer");
let fourAnswerEl = document.getElementById("four-answer");
let passOrFailEl = document.getElementById("pass-or-fail");
let answersRightEl = document.getElementById("answers-right");

document.getElementById("submit-btn").addEventListener("click", checkAnswers);

function checkAnswers() {
    // Convert inputs to lower case
    let inOne = inOneEl.value.toLowerCase();
    let inTwo = inTwoEl.value.toLowerCase();
    let inThree = inThreeEl.value.toLowerCase();
    let inFour = inFourEl.value.toLowerCase();

    // Declare variables
    let correctCounter = 0;
    let inputsFilled = 0;

    // Check Inputs

    // Check if any are empty
    if (inOne === "") {
        console.log("Please fill in this field")
        inputsFilled++;
    }
    if (inTwo === "") {
        console.log("Please fill in this field")
        inputsFilled++;
    }
    if (inThree === "") {
        console.log("Please fill in this field")
        inputsFilled++;
    }
    if (inFour === "") {
        console.log("Please fill in this field")
        inputsFilled++;
    }

    if (inputsFilled === 0) {
        // Question 1
        if (inOne === "shroomite digging claw" || inOne === "the shroomite digging claw" || inOne === "shroomite") {
            console.log("Question 1: correct");
            inOneEl.classList.add("correct");
            inOneEl.classList.remove("incorrect");
            oneCorrectedEl.innerHTML = "Correct";
            correctCounter++;
        } else {
            console.log("Question 1: incorrect")
            inOneEl.classList.add("incorrect");
            inOneEl.classList.remove("correct");
            oneCorrectedEl.innerHTML = "Incorrect";
            oneAnswerEl.innerHTML = "Correct answer is: Shroomite Digging Claw"
        }

        // Question 2
        if (inTwo === "hammer" || inTwo === "a hammer" || inTwo === "hammers") {
            console.log("Question 2: correct");
            inTwoEl.classList.add("correct");
            inTwoEl.classList.remove("incorrect");
            twoCorrectedEl.innerHTML = "Correct";
            correctCounter++;
        } else {
            console.log("Question 2: incorrect");
            inTwoEl.classList.add("incorrect");
            inTwoEl.classList.remove("correct");
            twoCorrectedEl.innerHTML = "Incorrect";
            twoAnswerEl.innerHTML = "Correct answer is: Hammer"
        }

        // Question 3
        if (inThree === "moon lord" || inThree === "the moon lord") {
            console.log("Question 3: correct");
            inThreeEl.classList.add("correct");
            inThreeEl.classList.remove("incorrect");
            threeCorrectedEl.innerHTML = "Correct";
            correctCounter++;
        } else {
            console.log("Question 3: incorrect");
            inThreeEl.classList.add("incorrect");
            inThreeEl.classList.remove("correct");
            threeCorrectedEl.innerHTML = "Incorrect";
            threeAnswerEl.innerHTML = "Correct answer is: Moon Lord"
        }

        // Question 4
        if (inFour === "wall of flesh" || inFour === "the wall of flesh") {
            console.log("Question 4: correct");
            inFourEl.classList.add("correct");
            inFourEl.classList.remove("incorrect");
            fourCorrectedEl.innerHTML = "Correct";
            correctCounter++;
        } else {
            console.log("Question 4: incorrect");
            inFourEl.classList.add("incorrect");
            inFourEl.classList.remove("correct");
            fourCorrectedEl.innerHTML = "Incorrect";
            fourAnswerEl.innerHTML = "Correct answer is: Wall of Flesh"
        }

        // Calculate percentage
        let answersRight = "You got " + correctCounter + "/4 (" + correctCounter / 4 * 100 + "%)";
        console.log(answersRight);

        // Pass or Fail
        if (correctCounter >= 2) {
            passOrFailEl.innerHTML = "You passed! Good work!";
            passOrFailEl.style.color = "green";
            answersRightEl.style.color = "green";
        } else {
            passOrFailEl.innerHTML = "You failed. Bad work.";
            passOrFailEl.style.color = "red";
            answersRightEl.style.color = "red";
            
        }

        // Show result
        answersRightEl.innerHTML = answersRight;
    }
}