const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice().reverse());
console.log(numbers);  //original array remained intact, because slice make a copy and does not mutate the array