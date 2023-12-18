let compPoint = 0;
let userPoint = 0;
let msg = document.querySelector('.msg');
let choices = document.querySelectorAll('.choice');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
const genrChoice =() =>{
    const compChoice = ["rock",'paper','scissors'];
    const gnchoice = Math.floor(Math.random()*3);
    return compChoice[gnchoice];
}
const drawPlayer = ()=>{
    console.log("Draw game");
    msg.innerText = `Game Draw Baby!🥳 Play Again 😈`;
        msg.style.backgroundColor ='#F0ECE5';
        msg.style.color ='#161A30';
}
const showWinn = (winPera,userChoice,compCHoice)=>{
    if(winPera){
        userPoint++;
        userScore.innerText = userPoint;
        console.log('you win !');
        msg.innerText = `you win!🥳 😂your ${userChoice} beats ${compCHoice}`;
        msg.style.backgroundColor ='#B6BBC4';
        
        msg.style.color ='#161A30';
    }
    else{
        compPoint++;
        compScore.innerText = compPoint;
        console.log('you lose');
        msg.innerText = `you lost! 🥺😢${userChoice} beats your ${compCHoice}`;
        msg.style.backgroundColor ='red';
        msg.style.color ='#ffff';
    }
}
const playGame =(userChoice)=>{
    const useChice = userChoice;
    const compCHoice = genrChoice();
    console.log(`userChoice ${useChice}`);
    console.log(`compChoice ${compCHoice}`);
    if(useChice === compCHoice){
        drawPlayer();
    }
    else{
        let userWin = true;
    if(useChice === 'rock'){
        //paper , scissors
        userWin = compCHoice === 'paper' ? false : true ;
    }
    else if(useChice === 'paper'){
        //rock,scissors
        userWin = compCHoice === 'rock'?false :true;
    }
    else{
        //rock,paper
        userWin = compCHoice === 'rock' ? false : true;
    }
    showWinn(userWin,userChoice,compCHoice);
}

}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id')
        playGame(userChoice);
    })
})