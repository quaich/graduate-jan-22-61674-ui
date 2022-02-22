// Function within a function yo
var multiply = function (x) {
    return function(y) {
        return x*y;
    };
}
var multiplyby34 = multiply(34);
console.log(multiplyby34(18));
