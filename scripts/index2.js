// variables

const canvas = document.getElementById('canvas');
const blackButton = document.getElementById('blackButton');
const colorSelector = document.getElementById('colorSelector');
const rainbowMode = document.getElementById('rainbowMode');
const clearButton = document.getElementById('clearButton');
const sizeinput = document.getElementById('sizeInput');
const newCanvas = document.getElementById('newCanvas');
const toggleGrid = document.getElementById('toggleGrid');

let selectedColor = document.getElementById('colorSelector').value;
let canvasSize = document.getElementById('sizeInput').value;

// listeners 

blackButton.addEventListener('click', function() {
    selectedColor = '#000000';
    colorSelector.value = '#000000';
    return selectedColor;
});

colorSelector.addEventListener('change', function() {
    selectedColor = colorSelector.value;
    console.log(selectedColor);
    return selectedColor;
});

clearButton.addEventListener('click', clearCanvas);


// functions

function generateCanvas(canvasSize) {
    canvas.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;

    for (let i = 0; i < canvasSize**2; i++) {
        const tile = document.createElement('div');
        tile.classList.add('newTile');
        canvas.appendChild(tile);
        tile.addEventListener('mouseover', function (e) {
            tile.style.backgroundColor = selectedColor;
        });
    }

}

function updateColor(selectedColor) {
    tile.style.backgroundColor = selectedColor;
}

function clearCanvas() {
    let tiles = canvas.querySelectorAll('div');
    tiles.forEach(tile => tile.style.backgroundColor = '#ffffff')
} 

// main
generateCanvas(10);
