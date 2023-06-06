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

    document.getElementById("mensaje").innerHTML = "El numero sorteado es ...";
    document.getElementById("numberWinner").value = numWin;
    document.getElementById("numSorteados").innerHTML = "Los numeros sorteados anteriormente: ";
    document.getElementById("listaSorteados").value = drawnNumbers;
    console.log(drawnNumbers);
}