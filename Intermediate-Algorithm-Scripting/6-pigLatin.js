/* Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) { //This is my way and I feel so proud!
    let word = '';
    if (/^[^aeiou]/.test(str)) {
        word = str.replace(/([^aeiou]+)([aeiou]+\w+)/i, '$2$1').concat('ay')
    } else {
        word += str.concat('way')
    }
    return word.toLowerCase();
}
  
console.log("onsonantcay", translatePigLatin("Consonant")); //-> 
console.log("aliforniacay", translatePigLatin("california")); //-> aliforniacay
console.log("algorithmway", translatePigLatin("algorithm")); //-> algorithmway
console.log("eightway", translatePigLatin("eight")); //-> eightway
console.log("artzschway", translatePigLatin("schwartz")); //-> artzschway
console.log("rhythmay", translatePigLatin("rhythm")); //-> rhythmay

// Another way with ternary
/* function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/; //Searching consonants at the beginning
    let myConsonants = str.match(consonantRegex); //Put those consonants in myConsonants variable
    return myConsonants !== null //Ask if there is consonants at the beginning
      ? str
          .replace(consonantRegex, "") //Erase those conso by replace with empty string
          .concat(myConsonants) // Concatenate those to the end of str
          .concat("ay") // Add 'ay'
      : str.concat("way"); // If there is no consonant at the beginning, concat 'way'
} */