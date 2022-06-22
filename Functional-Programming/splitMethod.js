/* Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation. */

function splitify(str) {
    // Only change code below this line
    const splinter = str.split(/\s|\W/) // Using regex of "space" or "non alphanumeric"
    console.log(splinter);
    return splinter;
    // Only change code above this line
}

splitify("Hello World,I-am code"); //-> [ 'Hello', 'World', 'I', 'am', 'code' ]
splitify("Earth-is-our home"); //-> [ 'Earth', 'is', 'our', 'home' ]
splitify("This.is.a-sentence"); //-> [ 'This', 'is', 'a', 'sentence' ]