
let questions = [  //theme: geography
  { //welcome screen
    image: "images/welcome.jpg",
    question: "Welcome",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "",
    buttonText: "Start Game!"

  },
  { //question 1
    image: "images/canada.jpg",
    question: 'Which if the following is a country?',
    answers: [
      'Illinois',
      'Africa',
      'Canada',
      'Fred'
    ],
    correctAnswer: 'Canada',
    buttonText: "Submit"
  },
  {//question 2
    image: "images/concord.jpg",
    question: 'What is the capital of New Hampshire?',
    answers: [
      'Manchester',
      'Nashua',
      'Concord',
      'Istanbul'
    ],
    correctAnswer: 'Concord',
    buttonText: "Submit"
  },
  {//question 3
    image: "images/Australia.jpg",
    question: 'Which of these is a country AND a continent?',
    answers: [
      'Australia',
      'Antarctica',
      'North America',
      'South America'
    ],
    correctAnswer: 'Australia',
    buttonText: "Submit"
  },
  {//question 4
    image: "images/russia.jpg",
    question: 'Which Country is the largest? (area)',
    answers: [
      'USA',
      'Canada',
      'Russia',
      'India'
    ],
    correctAnswer: 'Russia',
    buttonText: "Submit"
  },
  {//quation 5
    image: "images/china.jpg",
    question: 'Which country has the largest population?',
    answers: [
      'India',
      'Russia',
      'Japan',
      'China'
    ],
    correctAnswer: 'China',
    buttonText: "Submit"
  }
];

const STORE = {
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function main() {

  renderScreen(template);

};
let i = 3;

let template = `
<div class="box">
  <div class="stats">
    <p>Question# ${STORE.questionNumber} of ${questions.length}</p>
    <p>Score: ${STORE.score}</p>
  </div>
  <div class="box"><img height = 200px width = 200px src="${questions[i].image}"></div>
  <div class="question">${questions[i].question}</div>
  <form>
  <div class= "answers">
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">${questions[i].answers[0]}</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">${questions[i].answers[1]}</label><br>
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">${questions[i].answers[2]}</label>
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">${questions[i].answers[3]}</label>
  </div>
  <div>
  <button class="submit">${questions[i].buttonText}
  </button>
  </div>
  </form> 
</div>
`;



function renderScreen(screenType) {
  $("h1").html(`
  <div>
  Our Game
  </div>`)
  $("main").html(screenType);

}

$(main)
/*

function QuestionScreen

  function renderQuestions

  *multiple choice question  ---- keyboard accessible
    *A
    *B
    *C
    *D

  * submit button

  function quizGrader --- intermediate determines question correctness
    * correct answer --- "Congrats"
    * incorrect answer -- "Sorry - the correct answer was X"
  * pulling from a correctAnswers array


  function runningScore  - desplayed on all question screens
   * correct answers / index#


  function endScreen
  * final score
  * "congrats yada yada"
  * play again button


** Variables ***********

Array of Question Objects  --- do we build a constructor like with LOTR?


currentQuestion

currentScore

  */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


/* HTML WireFrame */

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */