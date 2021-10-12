var quizData = [
    {
        question: 'How many continents are there?',
        a: '5',
        b: '6',
        c: '7',
        d: '8',
        correct: 'c',
    }, {
        question: 'How many countries are there in the world?',
            a: '190',
            b: '178',
            c: '195',
            d: '198',
            correct: 'c',
    }, 
    {
          question: 'How old is Joe Biden?',
          a: '70',
          b: '78',
          c: '72',
          d: '71',
          correct: 'b',
      },

];

var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById('h2question');
var quiz = document.getElementById('quiz');

var lblA_text = document.getElementById('lblA_text');
var lblB_text = document.getElementById('lblB_text');
var lblC_text = document.getElementById('lblC_text');
var lblD_text = document.getElementById('lblD_text');
var nextBtn = document.getElementById('btnNext');

var currentQuiz = 0;
var score = 0;

function loadQuiz(){
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    lblA_text.innerText = currentQuizData.a;
    lblB_text.innerText = currentQuizData.b;
    lblC_text.innerText = currentQuizData.c;
    lblD_text.innerText = currentQuizData.d;

}



function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    // var answerEls = document.querySelectorAll(".answer");
     answerEls.forEach((answerEl) => {
        answerEl.checked = false;
     });
}


loadQuiz();


nextBtn.addEventListener("click", () => {
    var answer = getSelected();

    if (answer) 
    {
        var qData = quizData[currentQuiz].correct;
        if (answer == qData){
            score++;
        }
    //    if (answer === quizData[currentQuiz].correct) {
    //        score++;
    //    }
    currentQuiz++;
     if (currentQuiz < quizData.length) {
         loadQuiz();
     } else {
         alert('you finished quiz!! score ' + score + "/" + quizData.length);
     }
    
    }
    //loadQuiz();
});