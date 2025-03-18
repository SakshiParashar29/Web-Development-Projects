const questions = [
{
    question: "Which is the largest animal in the world",
    answer : [
        {text: "Shark", correct: "false"},
        {text: "Blue Whale", correct: "true"},
        {text: "Elephant", correct: "false"},
        {text: "Giraffe", correct: "false"},
    ],
    
},
{
    question: "Which is the Smallest country in the world",
    answer : [
        {text: "Vatican City", correct: "true"},
        {text: "Bhutan", correct: "false"},
        {text: "Nepal", correct: "false"},
        {text: "Sri Lanka", correct: "false"},
    ],
    
},
{
    question: "Which is the largest Desert in the world",
    answer : [
        {text: "Kalahari", correct: "false"},
        {text: "Gobi", correct: "false"},
        {text: "Sahara", correct: "true"},
        {text: "Antarctica", correct: "false"},
    ],
    
},
{
    question: "Which is the smallest continent in the world",
    answer : [
        {text: "Asia", correct: "false"},
        {text: "Australia", correct: "true"},
        {text: "Artic", correct: "false"},
        {text: "Africa", correct: "false"},
    ],
    
},
]

const questioNum = document.getElementById('question');
const ansbtn = document.getElementById('answer-btn');
const next = document.getElementById("next");

let currQueIdx = 0, score = 0;
function show()
{
    next.style.display = "none";
    resetState();
    let Currque = questions[currQueIdx];
    let answers = questions[currQueIdx].answers;
    questioNum.innerHTML = (currQueIdx + 1) + ". " + Currque.question;

    Currque.answer.forEach(ans => {
         const button = document.createElement('button');
         button.innerHTML = ans.text;
         button.classList.add('ans');
         ansbtn.appendChild(button);
         if(ans.correct)
         {
            button.dataset.correct = ans.correct;
         }
         button.addEventListener("click", selectAnswer);
    })
}

function resetState()
{
    while(ansbtn.firstChild)
    {
        ansbtn.removeChild(ansbtn.firstChild);
    }
}
next.addEventListener("click", () => {
    currQueIdx++;
    if(currQueIdx < questions.length)
    {
        show();
    } 
    else
    {
        showScore();
    }
})
function selectAnswer(e)
{
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect)
    {
        selectBtn.classList.add("right");
        score += 1;
    }
    else{
        selectBtn.classList.add("wrong");
    }
    Array.from(ansbtn.children).forEach(button => {
        if(button.dataset.correct === 'true')
        {
            button.classList.add('right');
        }
        button.disabled = true;
    }) 
    next.style.display = "block";
}
function showScore()
{
    resetState();
    questioNum.innerHTML = `You Score ${score} out of ${questions.length}!!`;
    next.innerHTML = "Play Again";
    next.style.display = "block";
    next.onclick = () => {
        currQueIdx = 0;
        score = 0; 
        show();
    };
    
}
show();