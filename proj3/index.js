const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: 'Shark',correct: false},
            {text: 'Blue Whale',correct: true},
            {text: 'Elephant',correct: false},
            {text: 'Girrafe',correct: false}
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            {text: 'Asia',correct: false},
            {text: 'Australia',correct: true},
            {text: 'Artic',correct: false},
            {text: 'Africa',correct: false}
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answers: [
            {text: 'Vatican City',correct: true},
            {text: 'Bhutan',correct: false},
            {text: 'Nepal',correct: false},
            {text: 'Sri Lanka',correct: false}
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            {text: 'Kalahari',correct: false},
            {text: 'Gobi',correct: false},
            {text: 'Sahara',correct: false},
            {text: 'Antarctica',correct: true}
        ]
    },
    {
        question: "Which of the following is a client site language?",
        answers: [
            {text: 'Java', correct: false},
            {text: 'C', correct: false},
            {text: 'Python', correct: false},
            {text: 'JavaScript', correct: true}
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text: 'Hypertext Markup Language', correct: true},
            {text: 'Cascading Style Sheet', correct: false},
            {text: 'Jason Object Notation', correct: false},
            {text: 'Helicopters Terminals Motorboats Lamborginis', correct: false}
        ]
    },
    {
        question: "What year was JavaScript launched?",
        answers: [
            {text: '1996', correct: false},
            {text: '1995', correct: true},
            {text: '1994', correct: false},
            {text: 'none of the above', correct: false}
        ]
    },
    {
        question: "What does CSS stands for?",
        answers: [
            {text: 'Hypertext Markup Language', correct: false},
            {text: 'Cascading Style Sheet', correct: true},
            {text: 'Jason Object Notation', correct: false},
            {text: 'Helicopters Terminals Motorboats Lamborginis', correct: false}
        ]
    }
]

let questionEle = document.getElementById('question');
let answerBtns = document.getElementById('answer-btns');
let nextBtn = document.getElementById('next-btn');

let currentIndx = 0;
let score = 0;

function startQuiz(){
    currentIndx = 0;
    score = 0;
    nextBtn.innerText = 'Next';
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQues = questions[currentIndx];
    let questionNo = currentIndx+1;
    questionEle.innerText = questionNo+"."+currentQues.question

    currentQues.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild){
        //ensure kr rha hai ki saare old question ke answers wipe ho jaye, techniclly new slate bana rha hai for EVERY new quest
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    const allButtons = answerBtns.querySelectorAll('button');
    allButtons.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function showScore(){
    resetState();
    questionEle.innerHTML = `You scored ${score} out of ${questions.length}`
    questionEle.classList.add('ques-el')
    nextBtn.innerHTML = 'Play again';
    nextBtn.style.display = 'block';
}

function handleBtn(){
    currentIndx++;
    if(currentIndx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click',()=>{
    if(currentIndx < questions.length){
        handleBtn();
    }else{
        startQuiz();
    }
})
startQuiz();