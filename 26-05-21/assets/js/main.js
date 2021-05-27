function myfilter(cb, array) {
    let myarr = [];

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) == true) {
            myarr.push(array[i]);
        }

    }
    return myarr;
}
let arr = [43, 54, 66, 88, 97]
let arr2 = myfilter(a => a > 60, arr)
console.log(arr2)




function mymap(cb, array) {

    let myarr = [];

    for (let i = 0; i < array.length; i++) {
        myarr.push(cb(array[i]));
    }
    return myarr;
}

let arr3 = mymap(item => item / 2, arr);
console.log(arr3);


function myforeach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i]);
    }
}

function cb(element) {
    console.log(element);
}

myforeach(arr, cb);

