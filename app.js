const drawnNumbers = [];

function getNumMax(){
     let max = parseInt(document.getElementById("numMax").value);
     return max;
}

function getNumberRandom(numberMax){
    return Math.floor(Math.random() * numberMax);
}

function saveWinner(newWinner){
    drawnNumbers.push(newWinner);
}

function checkExist(number){

    console.log("\n existe --->  " + drawnNumbers.includes(number));
}

function sortear(){
    let max = getNumMax();
    let numWin = getNumberRandom(max);
    console.log(numWin);
    saveWinner(numWin);

    checkExist(numWin);

    document.getElementById("winner").innerHTML = numWin;

    console.log(drawnNumbers);
    
}