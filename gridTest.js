let gridArr = [];
let nested = [];
let grid = "";

function gridGen(x, y) {
    // assign y to the number of columns in nested arrays
    for(let i = 0; i < y; i++) {
        gridArr.push(nested);
    }
    console.log("gridArr: " + gridArr.length)
    for(let j = 0; j < x; j++) {
        nested.push(x);
    }

    for(let i = 0; i < gridArr.length; i++) {
        if(grid != "") {
            grid += "\n";
        }

        for(let j = 0; j < gridArr[i].length; j++) {
            grid += " 0";
        }
    }
    
    return grid;
}
console.log("uhh ", grid[1],[2])
console.log(gridGen(2, 10));
