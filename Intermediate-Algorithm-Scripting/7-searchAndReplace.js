/* Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

function myReplace(str, before, after) {
    let sentence = '';
    let regex = new RegExp(before)
    if (before[0] === before[0].toUpperCase()) {
        sentence = str.replace(regex, after[0].toUpperCase() + after.slice(1))
    } else {
        sentence = str.replace(regex, after.toLowerCase());
    }
    console.log(sentence)
    return sentence;
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //-> A quick brown fox leaped over the lazy dog
myReplace("Let us go to the store", "store", "mall"); //-> Let us go to the mall
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //-> He is Sitting on the couch


// Other way
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
}