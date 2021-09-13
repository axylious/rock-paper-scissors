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
                return 'Paper beats rock, you lose'
            case 'scissors':
                return 'Rock beats scissors, you win'
        }
    } else if(playerSelection == 'paper'){
        switch(computerSelection){
            case 'rock':
                return 'Paper beats rock, you win'
            case 'scissors':
                return 'Scissors beats paper, you lose'
        }
    } else if(playerSelection == 'scissors'){
        switch(computerSelection){
            case 'rock':
                return 'Rock beats scissors, you lose'
            case 'paper':
                return 'Scissors beats paper, you win'
        }
    }
}

function game(num){
    for(var i=0; i<num; i++){
        const playerSelection = prompt("Select your choice by typing out either rock, paper, or scissors: ").toLowerCase()
        const computerSelection = computerPlay()
        console.log(singleRound(playerSelection,computerSelection))
    }
}



const x = parseInt(prompt('How many games would you like to play: '))

game(x)