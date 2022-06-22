/* Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method. */

function sentensify(str) {
    // Only change code below this line
    let newArr = str.split(/\W/);
    let strSentence = newArr.join(' ')
    console.log(strSentence)
    return strSentence;
    // Only change code above this line
}
  
sentensify("May-the-force-be-with-you"); //-> 'May the force be with you'
sentensify("The.force.is.strong.with.this.one"); //-> 'The force is strong with this one'
sentensify("There,has,been,an,awakening"); //-> 'There has been an awakening'

// Chaining Solution
function sentensify2(str) {
    // Add your code below this line
    return str.split(/\W/).join(" ");
    // Add your code above this line
}