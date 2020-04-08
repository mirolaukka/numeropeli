var cNum = 0
var playerScore = 0
var compScore = 0

var tryCounter = 3


// Funktio joka asettaa tietokoneen numeron 0-10 välillä satunnaiseksi
function randomNumber(){
    cNum = parseInt(Math.random() * 10)
}

// Palauttaa kaikki buttonit normaaliin
function restartGame(){
    for(var x = 0; x<=10; x++){
        document.getElementById(x).disabled = false
    }
    updateLastNumber()
    randomNumber()
    tryCounter = 3
    document.getElementById('triesLeft').innerHTML = "Tries Left: " + tryCounter
    document.getElementById('lowerHigher').innerHTML = "Lower/Higher";
}

function restartScore(){
    playerScore = 0
    compScore = 0
    document.getElementById('score').innerHTML = `${playerScore} - ${compScore}`
}


function checkWin(pNum){
    var lowerHigherText = document.getElementById('lowerHigher')
    if(cNum == pNum.innerHTML){
        lowerHigherText.innerHTML = 'You won! It was ' + cNum
        addScore('player')
        setTimeout(() => { restartGame(); }, 2000);
        return
    }else if(cNum < pNum.innerHTML){
        lowerHigherText.innerHTML = 'Lower'
        for(var i = pNum.innerHTML; i<=10; i++){
            document.getElementById(i).disabled = true
        }
    }else{
        lowerHigherText.innerHTML = 'Higher'
        for(var i = pNum.innerHTML; i>=0; i--){
            document.getElementById(i).disabled = true
        }
    }
    tryCounter -= 1
    document.getElementById('triesLeft').innerHTML = "Tries Left: " + tryCounter
    if(tryCounter === 0){
        lowerHigherText.innerHTML = 'I won! It was ' + cNum
        for(var x = 0; x<=10; x++){
            if(document.getElementById(x) != pNum){
                document.getElementById(x).disabled = true
            }else{

            }

        }
        addScore('computer')
        setTimeout(() => { restartGame(); }, 2000);
        return
    }else{

    }
}

function addScore(who){
    var scoreElement = document.getElementById('score')
    if(who === 'player'){
        playerScore += 1
        scoreElement.innerHTML = `${playerScore} - ${compScore}`
    }else{
        compScore += 1
        scoreElement.innerHTML = `${playerScore} - ${compScore}`
    }
}

function updateLastNumber(){
    document.getElementById('lastNumber').innerHTML = "Last Number: " + cNum
}
