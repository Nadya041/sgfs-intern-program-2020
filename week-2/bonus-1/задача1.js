//ex.1

// const array1 = [1, 2, 3, 4];

// array1.forEach(element => console.log(element));



//ex.2
// var arr = [1, 2, 3, 4];

// var even = [1, 2, 3, 4].filter(v => v % 2 == 0); 

// console.log(even );

//ex.3
// var arr = [1, 2, 3, 4];
// var double = arr.map(v => v * 2);
// console.log(double);

var fillNumbers = (collection1,collection2,len, fillFunction) =>{
    if(collection1.length() > len){
        return collection1;
    }
    else{
        let ind = len - collection1.length();
        while(ind < len){
            collection1.push(collection2[Math.floor(Math.random() * collection2.length)])
        }
    }
    
    return collection1;
}


fillArray()= fillNumbers
