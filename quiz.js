// List of Answers
const correctAnswers = ['A','B','B','A','B'];

// Get Form 
const form = document.querySelector('.quiz-form');

// Get Class Result
const result = document.querySelector('.result');


// Form Event
form.addEventListener('submit', (e)=>{
   e.preventDefault();
   
   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q3.value, form.q4.value, form.q5.value]
   

   let score = 0;
   userAnswers.forEach((answer, index)=>{
       if(answer === correctAnswers[index]){
           score += 25;
       }

       result.classList.remove('d-none');
       scrollTo(0,0);

       let output = 0;
       const timer = setInterval(()=>{
           result.querySelector('span').textContent = `${output}%`
           if(output === score){
               clearInterval(timer)
           }else{
               output++
           }
       },10)

   }) // End Of forEach



}) // End Of Event Listener