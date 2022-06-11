/* Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 */

function repeatStringNumTimes(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
        if (i === num - 1){
            newStr += str;
        } else {
            newStr += str + ' ';
        }
    }
    console.log(newStr);
    return newStr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", -2)