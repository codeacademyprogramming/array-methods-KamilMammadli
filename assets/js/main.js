// const array = [1, 23, 4, 5, 6, 7, 9];

/*
    forEach - to loop through all elements in array, - return type - void
        callback function which is provided to forEach can not return anything;
    map - to loop through all elements in array - return type - Array(any type)
        and do something on elements and return a new array
    filter - to loop through all elements in array and filter by a condition
        - return type - Array(any type)
    concat - birleshdirmek an array with a new array or with a set of numbers
        - return type - Array(any type)
    includes - only works with VALUE TYPES you can not search for an object type ({}, []);
    
*/

// FOREACH
// array.forEach(doSomething);
// array.forEach((_, index, array) => {
//     console.log(index, 'index');
//     console.log(array, 'array');
// });
// array.forEach(function (_, index, array) {
//     console.log(index, 'index');
//     console.log(array, 'array');
// });

// function doSomething(_, index, array) {
//     console.log(index, 'index');
//     console.log(array, 'array');
// }


// MAP
// const newArray = array.map(item => item * 2);
// console.log(newArray);
// console.log(array);

// const newArray = array.map(item => {
//     if (item > 10) {
//         return item;
//     }
// });

// FILTER
// const filteredNumbers = array.filter((item) => {
//     // if (item > 5) {
//     //     return true;
//     // }
//     return item > 5;
// });

// const filteredNumbers2 = array.filter((item) => item > 5);

// console.log(filteredNumbers2);

// CONCAT
// const newArray = array.concat(100, 101, 102, 103);
// const newArray = array.concat(['agil', 'ata', { firstname: 'saturn' }, 103]);
// console.log(newArray);
// console.log(array);

// FIND
const users = [
    {
        firstname: 'Ali',
        lastname: 'Aghayev',
        age: 59
    },
    {
        firstname: 'Gazanfar',
        lastname: 'Gazanfarli',
        age: 22
    },
    {
        firstname: 'KAMIL',
        lastname: 'Mammadli',
        age: 20
    }
];

// const foundUser = users.find(user => {
//     if (user.age === 20) {
//         return true;
//     }
// });

// const foundUser2 = users.find(user => user.age === 20);

// FINDINDEX
// const foundIndex = users.findIndex((user) => {
//     if (user.firstname.toLocaleLowerCase() === 'kamil') return true;
// });

// console.log(foundIndex);


// FLAT
// const arr = [1, 2, [3, 4, 5], 6, [7, 8, 9, [10, 11, 12, [13, 14, 15, [16, 17, 18]]]]];

// const arrFlattened = arr.flat(2);
// const arrFlattened = arr.flat(Infinity);


// INCLUDES
// const result = arr.includes([3, 4, 5]);
// console.log(result);



// const simpleArr = [1, 2, 3, 4, 5, 6];

// const result = simpleArr.join('!'); // ','
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6]
// arr.reverse();

// const resultOfEvery = arr.every((item) => item > 0); //boolean
// const resultOfSome = arr.some(item => item > 5); //boolean

// console.log(resultOfEvery);
// console.log(resultOfSome);

// const result = arr.reduce(
//     (prevValue, currentValue) => {
//         // first loop - prevValue = 0, currentValue = 1;  0 + 1 = 1
//         // second loop - prevValue = 1, currentValue = 2; 1 + 2 = 3
//         // third loop - prevValue = 3, currentValue = 3; 3 + 3 = 6
//         // fourth loop - prevValue = 6, currentValue = 4; 6 + 4 = 10
//         // fifth loop - prevValue = 10, currentValue = 5; 10 + 5 = 15;
//         // sixth loop - prevValue = 15, currentValue = 6; total = 21

//         return prevValue + currentValue;
//     },
//     0
// );



// console.log(concat([1, 2, 3, 4, 5], [6, 7, 8])); [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(concat([1, 2, 3, 4, 5], 6, 7, 8)); [1, 2, 3, 4, 5, 6, 7, 8]


// function concat() {
//     if (typeof arguments[1] === 'object') {
//         const result = [];
//         for (let i = 0; i < arguments[0].length; i++) {
//             result.push(arguments[0][i]);
//         }
//         for (let i = 0; i < arguments[1].length; i++) {
//             result.push(arguments[1][i]);
//         }
//         return result;
//     } else {
//         const argumentsAsArray = Array.from(arguments);
//         const result = [];
//         for (let i = 0; i < argumentsAsArray[0].length; i++) {
//             result.push(argumentsAsArray[0][i]);
//         }
//         for (let i = 1; i < argumentsAsArray.length; i++) {
//             result.push(argumentsAsArray[i]);
//         }
//         return result;
//     }
// }

// concat(123, 23, [1, 23, 4, 5], 123, 23, 2, [123, 23, 23,], [12, 3, 23,]);

// const arr = [10, 50, 40, 30, 15, 100, 150, 200];

// const result = arr.indexOf(1, 4);
// const result = arr.lastIndexOf(1, 4);
// POP, PUSH, SHIFT, UNSHIFT, SPLICE - MODIFIES ORIGINAL ARRAY IN PLACE
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push(10, 11, 12, 13));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(-2, -1, 0));
// console.log(arr)

// const result = arr.splice(1, 3);
// First Overload - startIndex(included), deleteCount
// Second Overload - startIndex(included), deleteCount, [third and the rest] - to be inserted to array;
// const result = arr.splice(1, 3, 5, 6, 7);
// console.log(result);
// console.log(arr);

// IN SLICE FIRST ARGUMENT IS INCLUDED, SECOND ARGUMENT IS NOT INCLUDED;
// const result = arr.slice(3, 5);
// console.log(result);
// console.log(arr);

// const arr = new Array(15);
// arr.fill(5, 5, 10);
// console.log(arr);


// const arr = [1, 2, undefined, false, true, 100, 0, '', {}, []];

// const result = arr.filter(Boolean);


const str = ' il ilil il qar ';
// const res = str.charAt(1);
// console.log(res)
// const res = str.toUpperCase();
// console.log(res);
// const res = str.toLocaleUpperCase();
console.log(str.trimEnd());

// ECOURT-123: Added a new feaature

