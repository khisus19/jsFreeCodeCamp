/* Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */

function titleCase(str) {
    let wordsArray = str.toLowerCase().split(' ');
    let result = [];
    for (let i = 0; i < wordsArray.length; i++) {
        result[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
    }
    console.log(result.join(' '));
    return result.join(' ');
}
  
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
