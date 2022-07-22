/* Fill in the object constructor with the following methods below:
  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Passed:No properties should be added. Object.keys(bob).length should always return 6.
Passed:bob instanceof Person should return true.
Passed:bob.firstName should return undefined.
Passed:bob.lastName should return undefined.
Passed:bob.getFirstName() should return the string Bob.
Passed:bob.getLastName() should return the string Ross.
Passed:bob.getFullName() should return the string Bob Ross.
Passed:bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
Passed:bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
Passed:bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
Passed:bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
Passed:bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry"). */




const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  const name = firstAndLast.split(" ");
  this.getFullName = function() {
    return name.join(" ");
  };
  this.getFirstName = function() {
    return name[0];
  };
  this.getLastName = function() {
    return name[1];
  };
  this.setFirstName = function(firstName) {
    name.splice(0, 1, firstName);
  };
  this.setLastName = function(lastName) {
    name.splice(1, 1, lastName);
  };
  this.setFullName = function(fullName) {
    name.splice(0, 1, fullName.split(" ")[0]);
    name.splice(1, 1, fullName.split(" ")[1]);
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
