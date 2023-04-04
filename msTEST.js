// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];

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
            if(gridArr[i][j] == 0) {
                grid += "[" + 0 + "]"; 
            } else {
                grid += "[" + "-" + "]"; // can substitute characters with variables for mines
            }
        }
    }
    console.log(grid)
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
        
        console.clear();
        
        // if the user input is not within the grid range return an error
        if(coordX < 1 || coordX > (gridArr.length)|| coordY < 1|| coordY > (gridArr[0].length)) {
            console.log("Invalid coordinate, please enter a number between 1 and " + gridArr[0].length + " for x and y")
        } else {

        // Assign the desired cell to 1, -1 from the user input so that the grid starts at 1,1 instead of 0,0
        // This is only for the user expierence, the grid is still 0,0 based
        gridArr[coordY - 1][coordX - 1] = 1;

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
}

gridGen(3, 3);
gridUpdate()
clearCell();