// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }

// console.log(multiply([1, 2, 3, 4], 4)); // output 12


// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }


const board = 
[
[0,1,0,0],
[0,0,1,0],
[0,1,0,1],
[0,1,0,0],
];

function convertBoard(arr) {
    // new variable for an empty 2d array
    let newArr = [[]];
    // loop to iterate through the old array and re-map it into newArr
    for (let i = 0; i < arr.length; i ++ ){
        // takes the index of [i] in arr and maps it to the index of [i] in newArr
        newArr[i] = arr[i].map(element => {
            // if the element being mapped is equal to 1, change it into X
            if (element == 1){
                return "x";
            }
            // if not 1 then return element as it
            return element;
        });

    }
    return newArr;
}

console.log(convertBoard(board));