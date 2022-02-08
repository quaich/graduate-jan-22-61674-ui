//      Assignment - Whenever new object of Account class is created.
//      Count the number of objects for Account class.

var numberOfAccounts = 0

function incrementAccount(){
  numberOfAccounts++;
}

class Account{
  
  #accountNumber;
  #holderName;
  #balance;
  
  constructor(accountNumber, holderName, balance){
    this.#accountNumber = accountNumber;
    this.#holderName = holderName;
    this.#balance = balance;

    incrementAccount();
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
};

const x = new Account(1234, "Jeff", 100);
console.log(x.accountHolderName);
console.log(numberOfAccounts)

const y = new Account(1235, "Bob", 125);
console.log(y.accountHolderName);
console.log(numberOfAccounts)
