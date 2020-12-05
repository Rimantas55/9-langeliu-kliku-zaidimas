// console.log("working"); // check connetion
document.body.onload = createGrid;

function createGrid() {
    const block_btn = document.getElementById("main_block");
    for (let i = 1; i <= 9; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.id = "nr_" + i;
        let h1 = document.createElement("h5");
        h1.innerText += i;
        block.appendChild(h1);
        block_btn.appendChild(block);
    }
}

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
