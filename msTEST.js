// import the readline module
const readline = require('readline');

// Initialize empty arrays and strings for grid generation
let gridArr = [];
let nested = [];
let grid = "";

function gridGen(x, y) {
    for(let i = 0; i < y; i++) {
        gridArr.push([]);
    }
    console.log("gridArr:", gridArr)

    for(let j = 0; j < x; j++) {
        gridArr[i].push(x);
    }
    console.log("gridArr[i] push x:", gridArr)
}

gridGen(2, 3);