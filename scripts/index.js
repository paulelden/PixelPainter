const grid = document.getElementById("grid"); // assigning basic properties to grid
grid.style.display = 'flex'; 
grid.style.alignItems = 'left';
grid.style.justifyContent = 'space-evenly';
grid.style.flexWrap = 'wrap';

const newGrid = document.getElementById('newgrid'); // this is the code for the button
newGrid.addEventListener('click', () => {           
    let gr = document.getElementById('grid');   // the contents of this function will 
    let child = gr.lastElementChild;            // delete the children of the grid/container
    while (child) {                                 
        gr.removeChild(child);
        child = gr.lastElementChild;
    }
    let userInput = parseInt(prompt("How many tiles?")); // then prompt for new tilecount
    spawnTiles(userInput);
});

// functions

function spawnTile(){
    const keyframe = [  // this keyframe is used to animate the tile on mouse exit
        { backgroundColor: 'black'},
        { backgroundColor: 'white'}
    ];
    const tile = document.createElement('div'); // create tile in memory
    tile.classList.add('tileStyle');            // add basic style
    grid.appendChild(tile);                     // instantiate tile in DOM

    tile.addEventListener('mouseenter', () => { // on mouse enter apply active style,
        tile.classList.add('tileStyleActive')   // changing color
    });

    tile.addEventListener('mouseout', () => {   // on mouse exit animate tile back to 
        tile.animate(keyframe, 1000);           // original color, remove active style
        tile.classList.remove('tileStyleActive');
    });
    
}

function spawnTiles(n) {    // where n = number of tiles 
    for (let i = 0; i < n; i++){
      spawnTile(); 
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