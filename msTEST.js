// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];
let initClear = false;
let unclear = 0;
let mine =  1;
let clear = 2;
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

    // ANCHOR bomb generation
    // if it's the first clear, then change a random index of gridArr to 1 to assign the bombs
    if(initClear == false) {
        // change a random index of gridArr to 1
        gridArr[Math.floor(Math.random() * gridArr.length)][Math.floor(Math.random() * gridArr[0].length)] = mine;

        initClear = true;
    }

    // Reset the grid string to nothing so it doesn't keep adding to the previous grid
    let grid = "   1  2  3";
              //1:[0][0][0] 
    // loop for each subarray in gridArr (the rows)
    for(let i = 0; i < gridArr.length; i++) {
        // if grid != "" then enter a new line 
        if(grid != "") {
            grid += "\n"
        }
        grid += i + 1 + ":"

        // for the length of each subarray (the colums) add a cell
        for(let j = 0; j < gridArr[i].length; j++) {

            //ANCHOR - if the value of the cell is 0, add a 0 to the grid, else add a 1
            if(gridArr[i][j] == unclear) {
                grid += "[" + "-" + "]"; 
                // SAFE CELL
            } else if(gridArr[i][j] == clear) {
                grid += "[" + " " + "]"; 
                // BOMB CELL
            } else if(gridArr[i][j] == mine) {
                grid += "[" + "B" + "]"; 
            }
        }
    }
    console.log(grid)
    clearCell()
}

// create a user input with terminal 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clearCell() {
    // ask the user for desired grid coords to 'clear'
    rl.question('coords x: ', (coordX) => {
        rl.question('coords y: ', (coordY) => {
        
       
        
        // if the user input is not within the grid range return an error
        if(coordX < 1 || coordX > (gridArr.length)|| coordY < 1|| coordY > (gridArr[0].length)) {
            console.log("Invalid coordinate, please enter a number between 1 and " + gridArr[0].length + " for x and y")
        } else {

        // Assign the desired cell to 1, -1 from the user input so that the grid starts at 1,1 instead of 0,0
        // This is only for the user expierence, the grid is still 0,0 based
        gridArr[coordY - 1][coordX - 1] = clear

        
        
        }
        // Invoke the gridUpdate funciton to update the and re-log the grid
        gridUpdate()

        // loop the functions if the game is not over
        if(!gameOver) {
            clearCell()
        }

        //TODO - add a game over function
        // if() {
        //     gameOver = true;
        // }

        // close the interface
     
        });
    });
    
}

gridGen(3, 3)
gridUpdate()






// FUNCTION PLANNING
/*
gridGen(x, y) 
- create an array with subarrays equal to the grid dimentions. Possibly only needs to run once unless restarting the game


gridUpdate()
- convert the gridArr to a string that can be printed to the console and handles any changes happening to the grid

clearCell()
- Ask the user for input of the desired cell to clear -> changes the value of the gridArr and sends it to gridUpdate() to update the grid
- could split up into two functions - one for user input and one for clearing cells -> this can be one of many functions, like a flag function

*/