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
    // insert phrase
    if(score===25){
        result.querySelector('p').innerHTML += `Estude um pouco mais de teoria.`
    }
    else if(score===50){
        result.querySelector('p').innerHTML += `Você ainda pode melhorar!`
    }
    else if(score===75){
        result.querySelector('p').innerHTML += `Esta quase lá!`
    }
    else if(score===100){
        result.querySelector('p').innerHTML += `Você está em dia com os estudos, parabéns!`
    }
    else if(score===0){
        result.querySelector('p').innerHTML += `Revise os conteúdos e tente novamente.`
    }
    result.classList.remove("d-none");
    
    window.scrollTo(0, 0);

    


    
})

