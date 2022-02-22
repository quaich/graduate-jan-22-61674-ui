function is_weekend (date) {
    var dateObject = new Date(date);
    if ( dateObject.getDay() == 0 || dateObject.getDay() == 6 ) {
        return true;
    }
    else{
        return false;
    }
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));