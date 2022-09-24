const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const play = document.querySelector(".play")
const reset = document.querySelector(".stop")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
let countSeconds = 0;

function timerReset(){
 minutesDisplay.textContent = "00"
 secondsDisplay.textContent = "00"
}

function counterDown(){

    if(countSeconds == 0 ){
        secondsDisplay.textContent = "59"
        minutesDisplay.textContent = String(minutesDisplay.textContent - 1).padStart(2,"0")
    }     

    setTimeout(() => {

        let seconds = Number(secondsDisplay.textContent);

        countSeconds = seconds - 1;   
    
        secondsDisplay.textContent = String(countSeconds).padStart(2,"0")
       
        if(Number(minutesDisplay.textContent) <= 0){
            minutesDisplay.textContent = "00"
            secondsDisplay.textContent = "00"
            
        }

        counterDown()

    }, 1000); 
}

play.addEventListener('click', () => {
    counterDown()
})

reset.addEventListener('click', () =>{
    timerReset()
})

plus.addEventListener('click', () =>{
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2,"0")
    secondsDisplay.textContent = String(Number(secondsDisplay.textContent) + 1).padStart(2,"0")
})
minus.addEventListener('click', () =>{
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2,"0")
    secondsDisplay.textContent = String(Number(secondsDisplay.textContent) + 0).padStart(2,"0")
})







