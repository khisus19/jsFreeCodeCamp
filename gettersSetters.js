/* Use getters and setters to Control Access to an Object

You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
 */

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// Only change code below this line
class Thermostat {
    constructor(tempi){
      this._temperatureCelsius = 5/9 * (tempi - 32);
    }
    get temperature(){
      return this._temperatureCelsius;
    }
    set temperature(tempi){
      this._temperatureCelsius = tempi;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  console.log(thermos);
  let temp = thermos.temperature; // 24.44 in Celsius - Usando el getter
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius - Usando el setter
  console.log(temp);
