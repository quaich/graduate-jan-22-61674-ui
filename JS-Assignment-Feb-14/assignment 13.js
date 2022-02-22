let myPromise = new Promise(function(resolve, reject) {
    let thisValueShouldBe10 = 0;
  
    if (thisValueShouldBe10 == 10) {
      resolve();
    } 
    else {
      reject();
    }
  });
  
myPromise.then(function(value) {
console.log("value")
});
  