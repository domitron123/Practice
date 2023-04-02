// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];
let nested = [];
let grid = "";

function gridGen(x, y) {
    
    // For each row (y value), add a new nested array to gridArr
    for(let i = 0; i < y; i++) {
        gridArr.push(nested);
    }
    
    // For each column (x value), add x to each nested array
    for(let j = 0; j < x; j++) {
        nested.push(x);
    }
 
    // For each nested array, add a new line to the grid
    for(let i = 0; i < gridArr.length; i++) {
        if(grid != "") {
            grid += "\n";
        }

        // For each column, add a 0 to the grid
        for(let j = 0; j < gridArr[i].length; j++) {
            grid += " 0";
        }
    }
    // return the grid string
    return grid;
}

// create an interface to read from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// add a question to the interface to get the x and y values
rl.question('Enter a number for the x value: ', (x) => {
    rl.question('Enter a number for the y value: ', (y) => {
        // run the gridGen function and print the grid
        console.log(gridGen(x, y));
        // close the interface
        rl.close();
    });
});

