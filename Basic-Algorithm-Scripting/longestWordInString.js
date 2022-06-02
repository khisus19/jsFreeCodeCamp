// Find the longest word in a string
function findLongestWordLength(str) {
    let words = str.split(' ');
    let counter = 0;
    for (let i = 0; i < words.length; i++){
        if (words[i].length > counter){
            counter = words[i].length;
        }
    }
    return counter;
}

let test = findLongestWordLength("The quick brown fox jumped over the lazy dog");
let test2 = findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
console.log(test2)

// Using .reduce()

function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
}

// Code Explanation

// In case you’re wondering about that 0 after the callback function, it is used to give an initial value to the longest, so that Math.max will know where to start.