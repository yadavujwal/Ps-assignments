const square = document.querySelectorAll('.square');
const mole =  document.querySelectorAll('.mole');
const timeleft = document.querySelector('#time-left');

let score  = document.querySelector('#score');


let result = 0;
let currentTime = timeleft.textContent; 
let hitPosition;

function randomSquare(){
    square.forEach(className=>{
        className.classList.remove('mole');
        className.addEventListener('click',()=>{
        if(className.id==hitPosition)
        {
            result++;
            score.textContent = result;
        }
        });

    })


    let randomPosition = Math.floor(Math.random()*9);
    square[randomPosition].classList.add('mole');


    /// assign the id of square[randomposition] to hitPosition for us to know later

    hitPosition = square[randomPosition].id;





}


function moveMole(){
       
      
            setInterval(randomSquare,1500);
       
    
        
    
    
}


function countDown()
{
    currentTime --;
    timeleft.textContent = currentTime;
    if(currentTime==0)
    {
        // GameOver();
        location.reload()
    }
}

moveMole()
setInterval(countDown,1000);
