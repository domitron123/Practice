// === MINESWEEPER GAME ===

// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];
let initMine = true;
let unclear = 0;
let mine =  1;
let selected;

gameOver = false;

// call gridGen function with desired grid dimentions
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
    console.clear()

    // Reset / set the grid so it doesn't add to itself
            //1:[0][0][0] (column numbers)
    let grid = "   1  2  3";
            
    // loop for each subarray in gridArr (the rows)
    for(let i = 0; i < gridArr.length; i++) {
        // add a line break for each row
        if(grid != "") {
            grid += "\n"
        }
        // add the row number to the grid string
        grid += i + 1 + ":"	

        // for each element in each subarray 
        for(let j = 0; j < gridArr[i].length; j++) {
            
            // update grid string in relation to gridArr board state
            if(gridArr[i][j] == unclear || gridArr[i][j] == mine) {
                grid += "[" + "x" + "]"
            } else if(gridArr[i][j] == selected) {
                grid += "[" + "A" + "]"

            }

            // old code for testing
            // //(unclear = "[" + "-" + "]") : (clear = "[" + " " + "]") : (mine = "[" + "B" + "]")
            // // grid = (gridArr[i][j] == unclear) ? grid += "[" + "-" + "]" : grid = grid;
            // // grid = (gridArr[i][j] == clear) ? grid += "[" + " " + "]" : grid = grid;
            // // grid = (gridArr[i][j] == mine) ? grid += "[" + "B" + "]" : grid = grid;
        }
    }
    // log grid to the console (this is the game board)
    console.log(grid)
    // invoke clearCell function to ask the user for input
    clearCell()
}

// create a user input with terminal 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clearCell() {

    if(initMine == true) {
        // change a random index of gridArr to 1 (mine)
        gridArr[Math.floor(Math.random() * gridArr.length)][Math.floor(Math.random() * gridArr[0].length)] = mine;
        
        initMine = false;
    }
    
    console.log(gridArr) // debugging

    // ask the user for desired grid coords to 'selected'
    rl.question('coords x: ', (coordX) => {
        rl.question('coords y: ', (coordY) => {
        
        // if the user input is not within the grid range return an error
        if(coordX < 1 || coordX > (gridArr.length)|| coordY < 1|| coordY > (gridArr[0].length)) {
            console.log("Invalid coordinate, please enter a number between 1 and " + gridArr[0].length + " for x and y")
        } else {

        // Assign the selected cell to 1, -1 from the user input so that the grid starts at 1,1 instead of 0,0
        // This is only for the user expierence, the grid is still 0,0 based
        selected = gridArr[coordY - 1][coordX - 1];
        }

        // if its the first time the user has selected a cell, then generate a mine
        
        
        // if the selected cell is a mine, then game over
        // !! I think this needs to check make sure the generated mine is not the same as the selected cell 
        if(selected == mine) {
            gameOver = true;
            console.log("Game Over")
            
        } else {
            // invoke gridUpdate function to update the grid and create gameloop
            gridUpdate()
            
        }     
        });
    });
}


// intially invoke functions to start the game
gridGen(3, 3)
gridUpdate()


// FUNCTION PLANNING - POSSIBLY OUTDATED SINCE WRITTEN
/*
gridGen(x, y) 
- create an array with subarrays equal to the grid dimentions. Possibly only needs to run once unless restarting the game


gridUpdate()
- convert the gridArr to a string that can be printed to the console and handles any changes happening to the grid

clearCell()
- Ask the user for input of the desired cell to clear -> changes the value of the gridArr and sends it to gridUpdate() to update the grid
- could split up into two functions - one for user input and one for clearing cells -> this can be one of many functions, like a flag function

*/