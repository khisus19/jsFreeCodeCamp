/* Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */

const Person = function(firstAndLast) {
    let fullName = firstAndLast;

    this.getFullName = function() {
        return fullName;
    }
    this.getFirstName = function() {
        return fullName.split(' ')[0];
    }
    this.getLastName = function() {
        return fullName.split(' ')[1];
    }
    this.setFullName = function (input) {
        fullName = input;
    }
    this.setFirstName = function (input) {
        fullName = input + ' ' + fullName.split(' ')[1];
    }
    this.setLastName = function (input) {
        fullName = fullName.split(' ')[0] + ' ' + input;
    }
};
const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(Object.keys(bob));