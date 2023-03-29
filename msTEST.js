myArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // 3x3 array


// THIS IS WEIRD AND NOT THE SAME 1/3 CHANCE 
mineX = Math.floor(Math.random() * 10);
for(let i = mineX; i < 1 || i > 3; i--) {
    if(i < 1) {
        mineX += 1;
        break;
    }
    else if(i > 3) {
        mineX -= 1;
    }
    else if(i === 3) {
        break;
    }
}
    
console.log(mine)

let grid = "";

for(let i = 0; i < myArr.length; i++) {
    if(grid != "") {
        grid += "\n";
    }
    
    for(let j = 0; j <myArr[i].length; j++) {
        grid += " 0";
        
    }
}

console.log(grid);