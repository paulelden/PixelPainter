const container = document.getElementById("container");
container.style.display = 'flex'; 
container.style.alignItems = 'center';
container.style.justifyContent = 'space-evenly';

function spawnTiles(n) {    // where n = number of tiles
    
    for (let i = 0; i < n; i++){
        const tile = document.createElement('div');
        tile.classList.add('tileStyle');
        container.appendChild(tile);
    }
}

let howMany = parseInt(prompt("how many tiles?"));
spawnTiles(howMany);