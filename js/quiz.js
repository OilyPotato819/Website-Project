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
    console.log("Please fill in this field");
    document.getElementById("star-one").innerHTML = "*";
    inputsFilled++;
  } else {
    document.getElementById("star-one").innerHTML = "";
  }
  if (inTwo === "") {
    console.log("Please fill in this field");
    document.getElementById("star-two").innerHTML = "*";
    inputsFilled++;
  } else {
    document.getElementById("star-two").innerHTML = "";
  }
  if (inThree === "") {
    console.log("Please fill in this field");
    document.getElementById("star-three").innerHTML = "*";
    inputsFilled++;
  } else {
    document.getElementById("star-three").innerHTML = "";
  }
  if (inFour === "") {
    console.log("Please fill in this field");
    document.getElementById("star-four").innerHTML = "*";
    inputsFilled++;
  } else {
    document.getElementById("star-four").innerHTML = "";
  }

  if (inputsFilled === 0) {
    // Question 1
    if (inOne === "shroomite digging claw" || inOne === "the shroomite digging claw" || inOne === "shroomite"
    ) {
      console.log("Question 1: correct");
      inOneEl.style.border = "2px solid green";
      oneCorrectedEl.innerHTML = "Correct";
      oneCorrectedEl.style.color = "green";
      oneAnswerEl.innerHTML = "";
      correctCounter++;
    } else {
      console.log("Question 1: incorrect");
      inOneEl.style.border = "2px solid red";
      oneCorrectedEl.innerHTML = "Incorrect";
      oneCorrectedEl.style.color = "red";
      oneAnswerEl.innerHTML = "Correct answer is: Shroomite Digging Claw";
    }

    // Question 2
    if (inTwo === "hammer" || inTwo === "a hammer" || inTwo === "hammers") {
      console.log("Question 2: correct");
      inTwoEl.style.border = "2px solid green";
      twoCorrectedEl.innerHTML = "Correct";
      twoCorrectedEl.style.color = "green";
      twoAnswerEl.innerHTML = "";
      correctCounter++;
    } else {
      console.log("Question 2: incorrect");
      inTwoEl.style.border = "2px solid red";
      twoCorrectedEl.innerHTML = "Incorrect";
      twoCorrectedEl.style.color = "red";
      twoAnswerEl.innerHTML = "Correct answer is: Hammer";
    }

    // Question 3
    if (inThree === "moon lord" || inThree === "the moon lord") {
      console.log("Question 3: correct");
      inThreeEl.style.border = "2px solid green";
      threeCorrectedEl.innerHTML = "Correct";
      threeCorrectedEl.style.color = "green";
      threeAnswerEl.innerHTML = "";
      correctCounter++;
    } else {
      console.log("Question 3: incorrect");
      inThreeEl.style.border = "2px solid red";
      threeCorrectedEl.innerHTML = "Incorrect";
      threeCorrectedEl.style.color = "red";
      threeAnswerEl.innerHTML = "Correct answer is: Moon Lord";
    }

    // Question 4
    if (inFour === "wall of flesh" || inFour === "the wall of flesh") {
      console.log("Question 4: correct");
      inFourEl.style.border = "2px solid green";
      fourCorrectedEl.innerHTML = "Correct";
      fourCorrectedEl.style.color = "green";
      fourAnswerEl.innerHTML = "";
      correctCounter++;
    } else {
      console.log("Question 4: incorrect");
      inFourEl.style.border = "2px solid red";
      fourCorrectedEl.innerHTML = "Incorrect";
      fourCorrectedEl.style.color = "red";
      fourAnswerEl.innerHTML = "Correct answer is: Wall of Flesh";
    }

    // Calculate percentage
    let answersRight = "You got " + correctCounter + "/4 (" + (correctCounter / 4) * 100 + "%)";
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
    answersRightEl.innerHTML = answersRight;
  } else {
    passOrFailEl.innerHTML = "Please answer all the questions";
    passOrFailEl.style.color = "black";
    answersRightEl.innerHTML = "";
    oneCorrectedEl.innerHTML = "";
    twoCorrectedEl.innerHTML = "";
    threeCorrectedEl.innerHTML = "";
    fourCorrectedEl.innerHTML = "";
    oneAnswerEl.innerHTML = "";
    twoAnswerEl.innerHTML = "";
    threeAnswerEl.innerHTML = "";
    fourAnswerEl.innerHTML = "";
    inOneEl.style.border = "0px";
    inTwoEl.style.border = "0px";
    inThreeEl.style.border = "0px";
    inFourEl.style.border = "0px";
  }
}
