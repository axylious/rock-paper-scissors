function computerPlay(){
    let x = Math.floor(Math.random() * 3 + 1)
    switch(x){
        case 1:
            console.log('Rock')
            break
        case 2:
            console.log('Paper')
            break
        case 3:
            console.log('Scissors')
    } 
}