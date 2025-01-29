let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll(".btn")
let messgeContainer = document.querySelector("message")
let messageText = document.querySelector("message p")
let secondPlayer;

//contador de jogadas
let player1 = 0
let player2 = 0

//click event aos boxes
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2)

        //verifica se ja tem x ou o
        if(this.childNodes.length == 0){
            
            let cloneEl = el.cloneNode(true)
    
            this.appendChild(cloneEl)
            
            //computar jogada
            if(player1 == player2) {
                player1++
            } else {
                player2++
            }
    
        }
    });

}

//function para definir quem vai jogar.
function checkEl(player1, player2) {
    
    if(player1 == player2){
        // x joga
        el = x
    } else{
        // o joga
        el = o
    }

    return el

}