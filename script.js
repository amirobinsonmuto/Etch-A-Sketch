//Add limit to 100

//Prompt window for a visitor to pick a number
let pickedNum = prompt("Pick a number 0-100", "");

const container = document.getElementById("container")

//Function to create grids
function createRows(rowNum) {

    for (let i=0; i<=rowNum; i++) {
        let divRow = document.createElement('div');
        container.appendChild(divRow);
        divRow.classList.add('divRow');


        for (let k=0; k<=rowNum; k++) {
            let divCell = document.createElement('div');
            divRow.appendChild(divCell);
            divCell.classList.add('divCell');
        }
    }
}

createRows(pickedNum);

//draw button

const cells = document.querySelectorAll('.divCell');

const drawBtn = document.getElementById("drawBtn");

function draw() {
    cells.forEach((cell) => {
        cell.addEventListener ('mouseover', () => {
            cell.classList.add('colorChange');
        })
    })
}
drawBtn.addEventListener('click', draw);

//eraser button

const eraserBtn = document.getElementById("eraserBtn");

function erase() {
    cells.forEach((cell) => {
        cell.addEventListener ('mouseover', () => {
            cell.classList.remove('colorChange');
        })
    })
}
eraserBtn.addEventListener('click', erase);

//reset button

const resetBtn = document.getElementById("resetBtn");

function reset() {
    cells.forEach((cell) => {
        cell.classList.remove('colorChange');
    })
}
resetBtn.addEventListener('click', reset);

