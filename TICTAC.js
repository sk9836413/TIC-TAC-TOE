var player = "Player1";
var arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function changePlayer(){
    if(player === "Player1"){
        player = "Player2";
    } else {
        player = "Player1";
    }
}

function changeText(id){
    if(player === "Player1"){
        document.getElementById(id).innerHTML = "O";
    } else {
        document.getElementById(id).innerHTML = "X";
    }
    document.getElementById(id).style.border = "none";
    document.getElementById(id).style.outline = "0px";
}

function changeValue(value){
    if(value === 1){
        arr[0][0] = player;
    } else if(value === 2){
        arr[0][1] = player;
    } else if(value === 3){
        arr[0][2] = player;
    } else if(value === 4){
        arr[1][0] = player;
    } else if(value === 5){
        arr[1][1] = player;
    } else if(value === 6){
        arr[1][2] = player;
    } else if(value === 7){
        arr[2][0] = player;
    } else if(value === 8){
        arr[2][1] = player;
    } else if(value === 9){
        arr[2][2] = player;
    }
    changeText(value);
    changePlayer();
    checkFilledBoxes();
}

function checkFilledBoxes(){
    if(arr[0][0] !== "" && arr[0][1] !== "" && arr[0][2] !== "" && arr[1][0] !== "" && arr[1][1] !== "" && arr[1][2] !== "" && arr[2][0] !== "" && arr[2][1] !== "" && arr[2][2] !== ""){
        alert("Draw!");
    } else {
        checkWinner();
    }
}

function checkWinner(){
    if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] !== "" && arr[0][1] !== "" && arr[0][2] !== ""){
        // Condition 1
        alert("Congratulations! " + arr[0][0] + " wins");
    } else if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && arr[1][0] !== "" && arr[1][1] !== "" && arr[1][2] !== ""){
        // Condition 2
        alert("Congratulations! " + arr[1][0] + " wins");
    } else if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && arr[2][0] !== "" && arr[2][1] !== "" && arr[2][2] !== ""){
        // Condition 3
        alert("Congratulations! " + arr[2][0] + " wins");
    } else if(arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0] && arr[0][0] !== "" && arr[1][0] !== "" && arr[2][0] !== ""){
        // Condition 4
        alert("Congratulations! " + arr[0][0] + " wins");
    } else if(arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1] && arr[0][1] !== "" && arr[1][1] !== "" && arr[2][1] !== ""){
        // Condition 5
        alert("Congratulations! " + arr[0][1] + " wins");
    } else if(arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2] && arr[0][2] !== "" && arr[1][2] !== "" && arr[2][2] !== ""){
        // Condition 6
        alert("Congratulations! " + arr[0][2] + " wins");
    } else if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== "" && arr[1][1] !== "" && arr[2][2] !== ""){
        // Condition 7
        alert("Congratulations! " + arr[0][0] + " wins");
    } else if(arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2] && arr[2][0] !== "" && arr[1][1] !== "" && arr[0][2] !== ""){
        // Condition 8
        alert("Congratulations! " + arr[2][0] + " wins");
    }
}var player = "Player1";
var arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function changePlayer(){
    if(player === "Player1"){
        player = "Player2";
    } else {
        player = "Player1";
    }
}

function changeText(id){
    if(player === "Player1"){
        document.getElementById(id).innerHTML = "O";
    } else {
        document.getElementById(id).innerHTML = "X";
    }
    document.getElementById(id).style.border = "none";
    document.getElementById(id).style.outline = "0px";
}

function changeValue(value){
    if(value === 1){
        arr[0][0] = player;
    } else if(value === 2){
        arr[0][1] = player;
    } else if(value === 3){
        arr[0][2] = player;
    } else if(value === 4){
        arr[1][0] = player;
    } else if(value === 5){
        arr[1][1] = player;
    } else if(value === 6){
        arr[1][2] = player;
    } else if(value === 7){
        arr[2][0] = player;
    } else if(value === 8){
        arr[2][1] = player;
    } else if(value === 9){
        arr[2][2] = player;
    }
    changeText(value);
    changePlayer();
    checkFilledBoxes();
}

function checkFilledBoxes(){
    if(arr[0][0] !== "" && arr[0][1] !== "" && arr[0][2] !== "" && arr[1][0] !== "" && arr[1][1] !== "" && arr[1][2] !== "" && arr[2][0] !== "" && arr[2][1] !== "" && arr[2][2] !== ""){
        alert("Draw!");
    } else {
        checkWinner();
    }
}

function checkWinner(){
    if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] !== "" && arr[0][1] !== "" && arr[0][2] !== ""){
        // Condition 1
        alert("Congratulations! " + arr[0][0] + " wins");
    } else if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && arr[1][0] !== "" && arr[1][1] !== "" && arr[1][2] !== ""){
        // Condition 2
        alert("Congratulations! " + arr[1][0] + " wins");
    } else if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && arr[2][0] !== "" && arr[2][1] !== "" && arr[2][2] !== ""){
        // Condition 3
        alert("Congratulations! " + arr[2][0] + " wins");
    } else if(arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0] && arr[0][0] !== "" && arr[1][0] !== "" && arr[2][0] !== ""){
        // Condition 4
        alert("Congratulations! " + arr[0][0] + " wins");
    } else if(arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1] && arr[0][1] !== "" && arr[1][1] !== "" && arr[2][1] !== ""){
        // Condition 5
        alert("Congratulations! " + arr[0][1] + " wins");
    } else if(arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2] && arr[0][2] !== "" && arr[1][2] !== "" && arr[2][2] !== ""){
        // Condition 6
        alert("Congratulations! " + arr[0][2] + " wins");
    } else if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== "" && arr[1][1] !== "" && arr[2][2] !== ""){
        // Condition 7
        alert("Congratulations! " + arr[0][0] + " wins");
    } else if(arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2] && arr[2][0] !== "" && arr[1][1] !== "" && arr[0][2] !== ""){
        // Condition 8
        alert("Congratulations! " + arr[2][0] + " wins");
    }
}