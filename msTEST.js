// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];
let grid = "";
gameOver = false;

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
    // Reset the grid string to nothing so it doesn't keep adding to the previous grid
    grid = "";
    // loop for each subarray in gridArr (the rows)
    for(let i = 0; i < gridArr.length; i++) {
        // if grid != "" then enter a new line 
        if(grid != "") {
            grid += "\n"
        }
        // for the length of each subarray (the colums) add a cell
        for(let j = 0; j < gridArr[i].length; j++) {
            //ANCHOR - if the value of the cell is 0, add a 0 to the grid, else add a 1
            if(gridArr[i][j] == 0) {
                grid += "[" + 0 + "]";
            } else {
                grid += "[" + "-" + "]";
            }
        }
    }
    console.log(grid)
}

gridGen(3, 3);
gridUpdate()

// create a user input with terminal 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask the user for desired grid coords to 'clear'
rl.question('coords x: ', (chordX) => {
    rl.question('coords y: ', (chordY) => {
    
    console.clear();
    // Assign the desired cell to 1, -1 from the user input so that the grid starts at 1,1 instead of 0,0
    // This is only for the user expierence, the grid is still 0,0 based
    gridArr[chordX - 1][chordY - 1] = 1;
    
    if(chordX < 1 || chordX > 3 || chordY < 1 || chordY > 3) {
        console.log("Invalid coordinate, please enter a number between 1 and 3")
    } else {
    // Invoke the gridUpdate funciton to update the and re-log the grid
    gridUpdate();
    }

    //TODO - add a game over function
    // if() {
    //     gameOver = true;
    // }

    // close the interface
    rl.close();
    });
});
