const correctAnswers = ['A','A','A','B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check 
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // show result
    console.log(score);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove("d-none");
    window.scrollTo(0, 0);
    
})

