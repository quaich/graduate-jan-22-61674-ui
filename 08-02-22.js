//      Assignment - Whenever new object of Account class is created.
//      Count the number of objects for Account class.

class Account{
  
  #accountNumber;
  #holderName;
  #balance;
  static count = 0;
  
  constructor(accountNumber, holderName, balance){
    this.#accountNumber = accountNumber;
    this.#holderName = holderName;
    this.#balance = balance;
    Account.count++;
  }
  
  // getter & setter methods
    get accountHolderName() {
    return this.#holderName;
   }
  
   // public property named accountHolderName is created
   // it is wrapper around private property
   set accountHolderName(name) {  
     this.#holderName = name;
   }

  deleteObject(){
    Account.count += -1;
    //delete object; Syntax error: Delete of an unqualified identifier in strict mode.
    return(null);
  }
};

var x = new Account(1234, "Jeff", 100);
console.log(x.accountHolderName);
console.log(Account.count);
x = x.deleteObject();

var y = new Account(1235, "Bob", 125);
console.log(y.accountHolderName);
console.log(Account.count)
