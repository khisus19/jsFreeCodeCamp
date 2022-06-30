/* Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
    let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    let strArr = str.split('')
    let index;
    let decodedMessage = ''
    for (let i = 0; i < strArr.length; i++) {
        index = letters.indexOf(strArr[i]) + 13;
        if (index >= 13){
            decodedMessage = decodedMessage.concat(letters[index])
        } else {
            decodedMessage = decodedMessage.concat(strArr[i])
        }
    }
    console.log(decodedMessage)
    return decodedMessage;
}
  
rot13("SERR PBQR PNZC"); //-> FREE CODE CAMP
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");