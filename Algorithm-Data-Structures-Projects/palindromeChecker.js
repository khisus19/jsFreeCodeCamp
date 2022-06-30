/* Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

function palindrome(str) {
    let letters = str.toLowerCase().split('').filter(letter => /[A-Za-z0-9]/.test(letter));
    let leftToRight = letters.slice(0, Math.ceil(letters.length/2));
    let rigthToLeft = letters.slice(Math.floor(letters.length/2)).reverse();
    let truthnessArr = [];
    for (let i = 0; i < leftToRight.length; i++) {
        if(leftToRight[i] === rigthToLeft[i]) {
            truthnessArr.push(true)
        } else {
            truthnessArr.push(false)
        }
    }
    let isPalindrome = truthnessArr.every(boole => boole);
    console.log("Is '" + str + "' a palindrome: " + isPalindrome)
    return isPalindrome;
}
palindrome("1 eye for of 1 eye.");
palindrome("almostomla");
palindrome("Somos o no somos");
palindrome("_eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("Sé verlas al revés");
palindrome("not a palindrome");

/* 
Amó la paloma
Somos o no somos
Isaac no ronca así
Anita lava la tina */