/* Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

/* function spinalCase(str) {
    let spinalCaseString;
    if (/\s|_/.test(str)) {
       let words = str.split(/\s+|_+/g);
       spinalCaseString = words.join('-').toLowerCase();
    } else {
        spinalCaseString = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        // This looks for a lower case ([a-z]) followed by an upper case ([A-Z]) and replace those for the same but with a dash in the middle '$1-$2'

    }
    console.log(spinalCaseString);
    return spinalCaseString;
} */
  
spinalCase("thisIsSpinalTap");
spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-Small ThingsFor");

// A more complete an concise way
function spinalCase(str) {
    let strTapped = str.replace(/([a-z])([A-Z])|\s+|_+/g, '$1-$2').toLowerCase();
    console.log(strTapped);
    return strTapped;
}