// ex.1

const myForEach = (collection, callback) => {
    for (let i = 0; i < collection.length; i+=1) {
        callback(collection[i]);
    }
};

//  myForEach([1, 2, 3], function(item) {
//      console.log(item);
    
// });


// ex.2

const customFilter = (collection, callback, inPlace) => {
    const filteredArr = [];

    if (inPlace) {
        let from = 0
        let to   = 0;

        while (from < collection.length){
            if (callback(collection[from])) {
                
                collection[to] = collection[from];
                to++;
            }
            from++
        }
        collection.length = to;
        return;
    }
    for (let i = 0; i < collection.length; i+=1) {
        const result = callback(collection[i], i, collection);

        if(result){
            filteredArr.push(collection[i]);
        }

    }
    return filteredArr;
};

// const numersByTwo = customFilter([1, 2, 3, 4], num => num % 2 === 0);
// console.log(numbersByTwo);

// let arr = [1, 2, 3, 4];
// customFilter(arr, num => num % 3 == 0, true);
// console.log(arr);


//ex.3
const myMap = (collection, callback) => {
    const mapArr = [];

    for (let i = 0; i < collection.length; i+=1) {
        const result = callback(collection[i], i, collection);
        mapArr.push(result);
    }

    return mapArr;
};

//const squareNumBytwo = myMap([2, 4, 6], num => num ** 2);
//console.log(squareNumByTwo);

//ex.4

const randomFill = (collection, fillValues, length) => {

    if (collection.length > length) {
        return collection;

    }
    let arr = collection;

    for (let i = 0; i < length; i+=1) {
        let index = getRandomNumber (0, fillValues.length - 1);
        arr.push(fillValues[index]);
    }

    return arr;

    function  getRandomNumber(min, max) {
        return Math.floor(min + Math.random() * (max - min)) ;
    }
};

//console.log(randomFill([], ['a', 'b', 'c', 1, 10, 8, 7, 10], 5));

//ex.5

const reverseArr = function(collection) {

    function reverseCollection(collection){
        let reversed = [];

        for (let i =  collection.length - 1; i >= 0; i-=1){
            reversed.push(collection[i]);
        }
        return reversed;
    }
    if (collection.length === 2) {
        let reversed = [];

        for(let i = collection.length - 1; i >= 0; i-=1 ) {
            reversed.push(reverseCollection(collection[i]));
        }
        return reversed;
    }
    return reverseCollection(collection);
};

console.log(reverseArr([[1, 2, 3], ['a', 'b', 'c'] ]));
console.log(reverseArr([1, 2, 3]));