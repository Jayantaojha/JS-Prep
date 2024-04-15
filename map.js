/*
In JavaScript, the map() method is used to iterate over an array and apply a function to each element, returning a new array with the results of applying the function to each element. It does not modify the original array; instead, it creates and returns a new array.

array.map(function(currentValue, index, array) {
  // Do something with currentValue
  return transformedValue;
});

*/

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
    return num * 2;
})

console.log(doubledNumbers);


// chaining in map

const newNums = numbers
                    .map( num => num * 10)
                    .map(num => num + 1)

// console.log(newNums);