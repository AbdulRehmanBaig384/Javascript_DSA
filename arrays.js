function findNumbersLessThan(arrays, limit) {
    let result = []; 
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] < limit) {
            result[result.length] = arrays[i]; 
        }
    }
    return result;
}

// Example Usage
let numbers = [10, 5, 20, 3, 15, 8];
let limit = 10;
console.log("Numbers less than", limit, ":", findNumbersLessThan(numbers,limit));

// output
// PS C:\Users\PMLS\Desktop\New folder> node arrays.js
// Numbers less than 10 : [ 5, 3, 8 ]