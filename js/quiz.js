let inOneEl = document.getElementById("in-one")
let inTwoEl = document.getElementById("in-two")
let inThreeEl = document.getElementById("in-three")
let inFourEl = document.getElementById("in-four")

document.getElementById("submit-btn").addEventListener("click", checkAnswers)

function checkAnswers() {
    // Convert inputs to lower case
    let inOne = inOneEl.value.toLowerCase();
    let inTwo = inTwoEl.value.toLowerCase();
    let inThree = inThreeEl.value.toLowerCase();
    let inFour = inFourEl.value.toLowerCase();

    // Declare correctCounter
    let correctCounter = 0;

    // Check Inputs

    // Question 1
    if (inOne === "shroomite digging claw" || inOne === "the shroomite digging claw") {
        console.log("Question 1: correct")
        correctCounter++
        inOneEl.className += "correct";
    } else if (inOne === "") {
        console.log("Please fill in this field")
    } else {
        console.log("Question 1: incorrect")
        inOneEl.className += "incorrect";
    }

    // Question 2
    if (inTwo === "hammer" || inTwo === "a hammer" || inTwo === "hammers") {
        console.log("Question 2: correct")
        correctCounter++
    } else if (inTwo === "") {
        console.log("Please fill in this field")
    } else {
        console.log("Question 2: incorrect")
    }

    // Question 3
    if (inThree === "moon lord" || inThree === "the moon lord") {
        console.log("Question 3: correct")
        correctCounter++
    } else if (inThree === "") {
        console.log("Please fill in this field")
    } else {
        console.log("Question 3: incorrect")
    }

    // Question 4
    if (inFour === "wall of flesh" || inFour === "the wall of flesh") {
        console.log("Question 4: correct")
        correctCounter++
    } else if (inFour === "") {
        console.log("Please fill in this field")
    } else {
        console.log("Question 4: incorrect")
    }

    // Calculate percentage
    let answersRight = "You got " + correctCounter + "/4 (" + correctCounter / 4 * 100 + "%)"
    console.log(answersRight)

    // Pass or Fail
    if (correctCounter >= 2) {
        console.log("You passed! Good work!")
    } else {
        console.log("You failed. Bad work.")
    }
}