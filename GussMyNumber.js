'use strict';


// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = 'Correct Number...!! 🥳';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value =10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);



let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;

let highScore = 0;




document.querySelector('.check').addEventListener('click',function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    
    if(!guess){

        document.querySelector('.message').textContent = 'No Number...!! 🙄 ';

    }
    else if(guess === secretNumber){

        document.querySelector('.message').textContent = 'Correct Number...!! 🥳';

        document.querySelector('.number').textContent =secretNumber;

        document.querySelector('body').style.backgroundColor ='#60b347';

        document.querySelector('.number').style.width ='30rem';
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
  
    }
    else{
        if(score>1 ){
            
            if(guess>0 && guess<secretNumber){
                document.querySelector('.message').textContent = 'Too low...!! 📉 ';
            }

            else if(guess>0 && guess>secretNumber){
                document.querySelector('.message').textContent = 'Too High...!! 📈 ';
            }
            
            score--;
            document.querySelector('.score').textContent = score;
             
        }else{
            document.querySelector('.message').textContent = 'Game Over...!! You Lost The Game... 😭 ';

            document.querySelector('.score').textContent = 0;
        }
    }

});


// reset functionality

//1st method
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing... 🧐';

    document.querySelector('.score').textContent = 20;

    document.querySelector('.guess').value = "";

    document.querySelector('.number').textContent = "?";


    document.querySelector('body').style.backgroundColor ='#222';

    document.querySelector('.number').style.width ='15rem';
})


// 2nd method

// document.querySelector('.again').addEventListener('click',function(){
//     location.reload();
// })


