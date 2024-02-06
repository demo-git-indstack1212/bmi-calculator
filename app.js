 window.onload=() =>{
    const button = document.querySelector('#btn');
    button.addEventListener('click',calculateBmi)
}
function calculateBmi(){
    const height = document.querySelector('#height').value;
    const weight = documnet.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if(!height || isNaN(height) || height<0){
        console.log(innerText = "Please provide a valid height");
        return;
    }else if(!weight || isNaN(weight) || weight <0){
        console.log(innerText ="Please provide a valid weight ");
        return;
    }
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    
    
    if(bmi<18.6){
            console.log(innerText = `Under weight :${bmi}`);
        }
    else if (bmi>=18.6 && bmi <24.9){
            console.log(innerText =`Normal:${bmi}`);

        }
    else if (bmi>=25 && bmi <29.9){
            console.log(innerText =`Obesity:${bmi}`);

        }
    else{
            console.log(innerText=`Over weight :${bmi}`);
        }
    
    }
    
