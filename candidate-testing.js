const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// Question	Answer
// Who was the first American woman in space?	"Sally Ride"
// True or false: 5 kilometer == 5000 meters?	"true"
// (5 + 3)/2 * 10 = ?	"40"
// Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	"Trajectory"
// What is the minimum crew size for the ISS?	3

//TODO: Variables for Part 2

// let questions;
// let correctAnswers;
// let candidateAnswers;

let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = ["Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?");
  // return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // let candidateAnswer = input.question(question);

  // }
  // Loop through questions and collect user answers
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {

  let finalGrade = 0
  for (let i = 0; i < correctAnswers.length; i++) {
    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLocaleLowerCase()) {
      finalGrade++;
    }
  }


  let grade = (finalGrade / questions.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
  let candidateResult = "";
  if (grade >= 80) {
    candidateResult = "Pass";
  } else {
    candidateResult = "Fail";
  }
  console.log(`>>> Overall Grade: ${grade}% (${finalGrade} of ${questions.length} responses correct) <<<\n>>> Result: ${candidateResult} <<<`);


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`\nHello, ${candidateName}!`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};