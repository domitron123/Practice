// Define the array with all elements initialized to 0
let myArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// Define an empty string to store the grid
let grid = "";

// Set the maximum and minimum values for the random number generator
let max = myArr.length;
let min = 1;

// Generate a random integer between min and max (inclusive)
let mine = Math.floor(Math.random() * (max - min + 1)) + min;

// Print the random number
console.log(mine);


// Loop through the rows of the array
for(let i = 0; i < myArr.length; i++) {

    // If the grid is not empty, add a new line character to separate the rows
    if(grid != "") {
        grid += "\n";
        
    }

    grid += "X:" + (i + 1);

    // Loop through the columns of the array
    for(let j = 0; j < myArr[i].length; j++) {
        // Add a space and a 0 to the grid for each element in the row
        // if(i === 0) {
        //     grid += "Y"
        //     grid += "\n"
           
        // }
        grid += " 0";
        console.log(j)
        
    }
}

// Print the grid
console.log(grid);


// THIS IS WEIRD AND NOT THE SAME 1/3 CHANCE 
// mineX = Math.floor(Math.random() * 10);
// for(let i = mineX; i < 1 || i > 3; i--) {
//     if(i < 1) {
//         mineX += 1;
//         break;
//     }
//     else if(i > 3) {
//         mineX -= 1;
//     }
//     else if(i === 3) {
//         break;
//     }
// }