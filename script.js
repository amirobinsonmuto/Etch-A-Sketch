
//Function to create grids
const container = document.getElementById("container")
function createRows(rowNum) {
    
    for (let i=1; i<=rowNum; i++) {
        let divRow = document.createElement('div');
        container.appendChild(divRow);
        divRow.classList.add('divRow');
        
        
        for (let k=1; k<=rowNum; k++) {
            let divCell = document.createElement('div');
            divRow.appendChild(divCell);
            divCell.classList.add('divCell');
        }
    }
}

//Prompt window for a visitor to pick a number
let pickedNum = prompt("Pick a number 2-100", "");

while (pickedNum < 2 || pickedNum >100) {
    pickedNum = prompt("Pick a number again. It needs to be 2-100", "");
}

createRows(pickedNum);

//declare a variable for .divCell
const cells = document.querySelectorAll('.divCell');

//color picker function
function pickColorAndDraw() {
    let color = document.getElementById('colorpicker').value;
    cells.forEach((cell) => {
        cell.addEventListener ('mouseover', () => {
            cell.style.backgroundColor = color;
        })
    })
    // colorChange.style.backgroundColor = color;
}

//draw button
const drawBtn = document.getElementById("drawBtn");

drawBtn.addEventListener('click', () => {
    pickColorAndDraw();
});


//eraser button
const eraserBtn = document.getElementById("eraserBtn");

function erase() {
    cells.forEach((cell) => {
        cell.addEventListener ('mouseover', () => {
            cell.style.backgroundColor = '#FFFFFF';
        })
    })
}
eraserBtn.addEventListener('click', erase);

//reset button
const resetBtn = document.getElementById("resetBtn");

function reset() {
    cells.forEach((cell) => {
        cell.style.backgroundColor = '#FFFFFF';
    })
}
resetBtn.addEventListener('click', reset);

