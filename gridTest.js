let gridArr = [];
let nested = [];
let grid = "";

function gridGen(x, y) {
    
    // for each Y cord, create a new nested array withing gridArr
    for(let i = 0; i < y; i++) {
        gridArr.push(nested);
        console.log("pushing 'nested' array into gridArr for y value: ", gridArr)
    }
    
    // for each X cord, push the X cord to each nested array
    for(let j = 0; j < x; j++) {
        nested.push(x);
        console.log("pushing x value into nested array for x value: ", nested)
        console.log("gridArr after push: ", gridArr)
    }
 
    // for each nested array, create a new line
    for(let i = 0; i < gridArr.length; i++) {
        if(grid != "") {
            console.log(" for each gridArr.length (1,2,3 becuase its counting subarrays) grid is not empty, adding a new line")
            grid += "\n";
            console.log("grid is now: ", grid)
        }

        // for each X cord, add a 0 to the grid 
        for(let j = 0; j < gridArr[i].length; j++) {
            console.log("for each gridArr[i].length (1,2,3 becuase its counting subarrays) add a 0 to the grid")
            grid += " 0";
        }
    }
    
    return grid;
    
}
console.log(gridArr)
console.log(gridGen(3, 5));
