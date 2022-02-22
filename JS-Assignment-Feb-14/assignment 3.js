function merge_arr(arr1, arr2) {
    var newArr = arr2;
    for (x of arr1) {
        if (!arr2.includes(x)) { 
            newArr.unshift(x);
        }
    }
    return newArr;
};
console.log(merge_arr([1,2,4], [8,10,14,53,78]));


//test data 
console.log(merge_arr([1, 2, 3], [2, 30, 1]));
