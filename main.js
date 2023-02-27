let questions = document.querySelector('.question');

let radio = document.querySelectorAll('.radio');
let radio_one = document.querySelector('#radio1');
let radio_two = document.querySelector('#radio2');
let radio_three = document.querySelector('#radio3');
let radio_four = document.querySelector('#radio4');



let option_one = document.querySelector('#option-1');
let option_two = document.querySelector('#option-2');
let option_three = document.querySelector('#option-3');
let option_four = document.querySelector('#option-4');

let submit_btn = document.querySelector('.submit');

let result = document.querySelector('.result');
let score_1 = document.querySelector('.score-1');


const quiz = [
    {
        question: "Q1. What is the full form of HTML?",
        option1: "hello to my land",
        option2: "Hey Text Markup Language",
        option3: "Hypertext Markup Language",
        option4: "Hypertext makeup language",
        answer: "radio3"
    },

    {
        question: "Q2. What is the full form of CSS?",
        option1: "Cascading Style sheep",
        option2: "Cascading Style sheet",
        option3: "Cascading Super sheet",
        option4: "cartoon style sheet",
        answer: "radio2"
    },

    {
        question: "Q3. What is the full form of HTTP?",
        option1: "Hyper text transfer protocol",
        option2: "Hyper tree transfer protocol",
        option3: "Hyper text transport protocol",
        option4: "Hyperlink text transport protocol",
        answer: "radio1"
    },
    {
        question: "Q4. What is the full form of JS?",
        option1: "Javascript",
        option2: "Javasuper",
        option3: "justscript",
        option4: "javajustscript",
        answer: "radio1"
    }
];




let counter = 0, score = 0;
let loadquestions = (question_count) => {

    questions.innerHTML = quiz[question_count].question;
    option_one.innerHTML = quiz[question_count].option1;
    option_two.innerHTML = quiz[question_count].option2;
    option_three.innerHTML = quiz[question_count].option3;
    option_four.innerHTML = quiz[question_count].option4;

}

loadquestions(counter);

const getusercheckedradio = () => {
    let checked_id = "";
    radio.forEach((inputradio) => {
        if (inputradio.checked)
            checked_id = inputradio.id;
    });
    return checked_id;
}

const deselector=()=>{
    radio.forEach((radioele)=>{
        radioele.checked=false;
    });
}


submit_btn.addEventListener("click", () => {

    const usercheckedinput = getusercheckedradio();
    if (usercheckedinput == quiz[counter].answer) {
        score++;

    }

    counter++;

    if (counter < quiz.length) 
        {
    deselector();   
    loadquestions(counter);
   
    }

    if (counter == quiz.length){
        result.classList.remove('display');
        score_1.innerHTML=`${score}/${quiz.length}`;

    }

});














