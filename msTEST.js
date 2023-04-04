// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];
let nested = [];
let grid = "";

function gridGen(x, y) {
    // for each y value, push that many subarrays within gridArr !ROWS!
    for(let i = 0; i < y; i++) {
        gridArr.push([]);

        // for each of those subarrays, push(0) x amount of times into each one !COLUMNS!
        for(let j = 0; j < x; j++) {
        gridArr[i].push(0);
        }  
    }
    return gridArr  
}

// gridUpate function that converts the girdArr to a tileable string 'grid'
function gridUpdate() {
    grid = "";
    // loop for each subarray in gridArr (the rows)
    for(let i = 0; i < gridArr.length; i++) {
        // if grid != "" then enter a new line 
        if(grid != "") {
            grid += "\n"
        }
        // for the length of each subarray (the colums) add a cell
        for(let j = 0; j < gridArr[i].length; j++) {
            if(gridArr[i][j] == 0) {
                grid += "[" + 0 + "]";
            } else {
                grid += "[" + 1 + "]";
            }
        }
    }
    console.log("---------------------")
    console.log(grid)
}

gridGen(3, 3);
gridUpdate()


// create a user input with terminal 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask the user for desired grid chords to 'clear'
rl.question('chords x: ', (chordX) => {
    rl.question('chords y: ', (chordY) => {
    // clear the grid at the desired chords - at the moment just outputs the value of the chord
    console.clear();
    gridArr[chordX][chordY] = 1;
    
    gridUpdate();

    // close the interface
    rl.close();
    });
});


