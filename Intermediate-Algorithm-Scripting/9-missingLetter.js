/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let missing = str.split("")
    let startIndex = alphabet.indexOf(missing[0]);
    let endIndex = alphabet.indexOf(missing[missing.length - 1])
    for (let i = startIndex; i < endIndex; i++) {
        if (alphabet[i] != missing[i - startIndex]) {
            console.log(alphabet[i])
            return alphabet[i]
        }
    }
    return undefined;
}
  
fearNotLetter("abce");
fearNotLetter("efghjklmno")
fearNotLetter("abcdefghijklmnopqrstuvwxyz");

