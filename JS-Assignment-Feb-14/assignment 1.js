// 1(a)
var array = [2, 13, 22, 50, 61, 1];
console.log(array.find(
    x => x > 12
));

// 1(b) 
var array = [2, 13, 22, 50, 61, 1];
console.log(array.filter(
    x => x > 15
));

// 1(c) 
var array = [2, 13, 22, 50, 61, 1];
console.log(array.map(
    x => x*2
));

// 1(d) 
var array = [2, 13, 22, 50, 61, 1];
const initial = 1;
const divide = array.reduce(
    (previousVal, currentVal) => previousVal / currentVal, initial
);
console.log(divide)

// 1(e) 
var array = ["hello", "darkness", "my", "old", "friend"]
console.log(array.slice(2,3));

// 1(f) 
var array = [1, 5, 7, 9, 12];
array.splice(4,2);  // Deletes last two elements
console.log(array);


