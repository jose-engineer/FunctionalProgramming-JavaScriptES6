const map = (arr, func) => //we don't use {} because the return is implicit, otherwise use return and {}
    arr.reduce((acc, x) => [
        ...acc,
        func(x),
    ], []);

// const map = (arr, func) => {
//     let newArr = [];

//     for(let i = 0; i < arr.length; i++) {
//         const result = func(arr[i]);
//         newArr.push(result);
//     }

//     return newArr;
// };

// testing if it works:

// Should be [2, 4, 6]
console.log(map([1, 2, 3], x => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], x => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));