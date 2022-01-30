// variables

const canvas = document.getElementById('canvas');
const blackButton = document.getElementById('blackButton');
const colorSelector = document.getElementById('colorSelector');
const toggleRainbowButton = document.getElementById('toggleRainbowButton');
const toggleGridButton = document.getElementById('toggleGridButton');
const clearButton = document.getElementById('clearButton');
const sizeinput = document.getElementById('sizeInput');
const newCanvas = document.getElementById('newCanvas');


let selectedColor = document.getElementById('colorSelector').value;
let canvasSize = document.getElementById('sizeInput').value;
let rainbow = false;

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

toggleRainbowButton.addEventListener('click', toggleRainbow);

toggleGridButton.addEventListener('click', toggleGrid);

clearButton.addEventListener('click', clearCanvas);

newCanvas.addEventListener('click', function(){
    generateCanvas(sizeinput.value);
})

// functions

function generateCanvas(canvasSize) {
    canvas.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;
    if (canvas.hasChildNodes){
        let tile = canvas.firstElementChild;
        while (tile) {
            canvas.removeChild(tile);
            tile = canvas.firstElementChild;
        }
    }

    for (let i = 0; i < canvasSize**2; i++) {
        const tile = document.createElement('div');
        tile.classList.add('grid');
        tile.style.backgroundColor = '#ffffff';
        canvas.appendChild(tile);
        tile.addEventListener('mouseover', function (e) {
            if (rainbow == true){
                tile.style.backgroundColor = randomColor();
            }
            else {
                tile.style.backgroundColor = selectedColor;
            }
        });
    }

}

function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

function updateColor(selectedColor) {
    tile.style.backgroundColor = selectedColor;
}

function toggleRainbow() {
    if (rainbow == true) {
        rainbow = false;
    }
    else {
        rainbow = true;
    }
}

function toggleGrid() {
    let tiles = canvas.querySelectorAll('div');
    if (tiles[0].classList.contains('grid')) {
        tiles.forEach(tile => tile.classList.remove('grid'));
    }
    else {
        tiles.forEach(tile => tile.classList.add('grid'));
    }
}

function clearCanvas() {
    let tiles = canvas.querySelectorAll('div');
    tiles.forEach(tile => tile.style.backgroundColor = '#ffffff')
} 

// main
generateCanvas(10);
