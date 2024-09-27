let score1 = 0
let score2 = 0

let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")

score1El.textContent = score1;
score2El.textContent = score2;

function plusOneH(){
    score1 += 1;
    score1El.textContent = score1;
}

function plusTwoH(){
    score1 += 2;
    score1El.textContent = score1
}

function plusThreeH(){
    score1 += 3;
    score1El.textContent = score1
}

function minusOneH(){
    score1 -= 1
    score1El.textContent = score1
}

function minusTwoH(){
    score1 -= 2
    score1El.textContent = score1
}

function minusThreeH(){
    score1 -= 3
    score1El.textContent = score1
}

function plusOneA(){
    score2 += 1;
    score2El.textContent = score2
}

function plusTwoA(){
    score2 +=2;
    score2El.textContent = score2
}

function plusThreeA(){
    score2 += 3;
    score2El.textContent = score2
}

function minusOneA(){
    score2 -= 1
    score2El.textContent = score2
}

function minusTwoA(){
    score2 -= 2
    score2El.textContent = score2
}

function minusThreeA(){
    score2 -= 3
    score2El.textContent = score2
}

function resetH (){
    score1 = 0
    score1El.textContent = 0

}

function resetA(){
    score2 = 0
    score2El.textContent = 0
}