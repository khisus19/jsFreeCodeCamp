/* Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 */

function mutation(arr) {
    let container = arr[0].toLowerCase().split('');
    let result = true;
    for (let i = 0; i < arr[1].length; i++) {
        result = container.includes(arr[1][i].toLowerCase());
        if (result == false) {
            break;
        }
    }
    return result;
}
  
console.log('hey', mutation(["hello", "hey"])); //-> flase
console.log('Hello', mutation(["hello", "Hello"])); //-> true
console.log('qrstu', mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //-> true
console.log('Army', mutation(["Mary", "Army"])); //-> true
console.log('Aarmy', mutation(["Mary", "Aarmy"])); //-> true
console.log('line', mutation(["Alien", "line"])); //-> true
