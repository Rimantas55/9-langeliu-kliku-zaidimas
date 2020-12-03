// console.log("working"); // check connetion
//TODO GENERATE HTML VIA LOOP

const block_btn = document.getElementsByClassName("block");
var index = 1;

//* SELECTS RANDOM NUMBER FROM 1-9
function next_random() {
    clearCell();
    index = Math.ceil(Math.random() * 9);
    document.getElementById("nr_" + index).style.background = "red";
}

//* CLEARS CELL BY INDEX
function clearCell() {
    document.getElementById("nr_" + index).style.background = "grey";
}

function next_red() {
    clearCell();
    if (index < 9) {
        index++;
        document.getElementById("nr_" + index).style.background = "red";
    } else {
        index = 1;
        document.getElementById("nr_" + index).style.background = "red";
    }
}
