// variables and listeners

const canvas = document.getElementById('canvas');
const blackButton = document.getElementById('blackButton');
const colorSelector = document.getElementById('colorSelector');
const rainbowMode = document.getElementById('rainbowMode');
const clearCanvas = document.getElementById('clearCanvas');
const sizeinput = document.getElementById('sizeInput');
const newCanvas = document.getElementById('newCanvas');
let selectedColor = document.getElementById('colorSelector').value;
let canvasSize = document.getElementById('sizeInput').value;

// listeners 

blackButton.addEventListener('click', function() {
    selectedColor = '#000000';
    colorSelector.value = '#000000';
});

colorSelector.addEventListener('change', function(e) {
    selectedColor = colorSelector.value;
    console.log(selectedColor);
    return selectedColor;
});


// functions



// main
canvasSize = '12';
