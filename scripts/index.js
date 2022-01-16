const grid = document.getElementById("grid"); // assigning basic properties to grid
grid.style.display = 'flex'; 
grid.style.alignItems = 'left';
grid.style.justifyContent = 'space-evenly';
grid.style.flexWrap = 'wrap';

const newGrid = document.getElementById('newgrid');
newGrid.addEventListener('click', () => {
    let gr = document.getElementById('grid');
    let child = gr.lastElementChild;
    while (child) {
        gr.removeChild(child);
        child = gr.lastElementChild;
    }
    console.log('triggered');
    let userInput = parseInt(prompt("How many tiles?"));
    spawnTiles(userInput);
});

// functions

function spawnTile(){
    const tile = document.createElement('div');
    tile.classList.add('tileStyle');
    grid.appendChild(tile);
    tile.addEventListener('mouseover', () => {
        tile.classList.add('tileStyleActive')
    });
    
}

function spawnTiles(n) {    // where n = number of tiles 
    for (let i = 0; i < n; i++){
      spawnTile(); // setTimeout is not working here for some reason
    }
}


// main
let howMany = parseInt(prompt("How many tiles?"));
if (howMany > 100) { 
    howMany = 100
}
else {
    // pass 
}
spawnTiles(howMany);