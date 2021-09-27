const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const player = document.getElementById('player');
const opp = document.getElementById('opp');

var pScore = parseInt(document.getElementById('player').innerHTML);
var oppScore = parseInt(document.getElementById('opp').innerHTML);

rock.onclick = () => game('rock');
paper.onclick = () => game('paper');
scissors.onclick = () => game('scissors');

function computerPlay(){
    let x = Math.floor(Math.random() * 3 + 1)
    switch(x){
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    } 
}

function singleRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'You tied'
    } else if(playerSelection == 'rock'){
        switch(computerSelection){
            case 'paper':
                oppScore++;
                opp.innerText = oppScore;
                win(pScore,oppScore);
                return 'Paper beats rock, you lose'
            case 'scissors':
                pScore++;
                player.innerHTML = pScore;
                win(pScore,oppScore);
                return 'Rock beats scissors, you win'
        }
    } else if(playerSelection == 'paper'){
        switch(computerSelection){
            case 'rock':
                pScore++;
                player.innerHTML = pScore;
                win(pScore,oppScore);
                return 'Paper beats rock, you win'
            case 'scissors':
                oppScore++;
                opp.innerText = oppScore;
                win(pScore,oppScore);
                return 'Scissors beats paper, you lose'
        }
    } else if(playerSelection == 'scissors'){
        switch(computerSelection){
            case 'rock':
                oppScore++;
                opp.innerText = oppScore;
                win(pScore,oppScore);
                return 'Rock beats scissors, you lose'
            case 'paper':
                pScore++;
                player.innerHTML = pScore;
                win(pScore,oppScore);
                return 'Scissors beats paper, you win'
        }
    }
}

function game(choice){
    const playerSelection = choice;
    const computerSelection = computerPlay()
    console.log(singleRound(playerSelection,computerSelection))
}

function win(pScore, oppScore){
    if(pScore >= 5){
        window.alert('You won!\n Win more!');
        location.reload();
    } else if(oppScore >= 5){
        window.alert('You lost...\n Try again!');
        location.reload();
    }
}