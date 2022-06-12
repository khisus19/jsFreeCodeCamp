/* Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
 */

function booWho(bool) {
    if (bool === true || bool === false){
        return true;
    } else {
        return false;
    }
}
  
booWho(true); //-> true
booWho(false); //-> true
booWho(null); //-> false
booWho([1, 2, 3]); //-> false
booWho({ "a": 1 }); //-> false

// Using typeof
function booWho(bool) {
    return typeof bool === "boolean";
}
  
booWho(null);