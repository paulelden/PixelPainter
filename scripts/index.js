const grid = document.getElementById("grid"); // assigning basic properties to grid
grid.style.display = 'flex'; 
grid.style.alignItems = 'left';
grid.style.justifyContent = 'space-evenly';
grid.style.flexWrap = 'wrap';


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


let howMany = parseInt(prompt("how many tiles?"));
spawnTiles(howMany);