/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

/* function convertHTML(str) {
    let result = str.split('').map(char => {
        switch (char) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '&':
                return '&amp;'
            case '"':
                return '&quot;'
            case "'":
                return '&apos;'
            case char:
                return char;
        }
    })
    console.log(result.join(''))
    return result.join('');
} */

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Schindler's List");
convertHTML('Stuff in "quotation marks"');
convertHTML("abc");

// This is the best I could get
function convertHTML(str) {
    const entities = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
    }
    let result = str.split('').map(char => {
        return entities[char] ? entities[char] : char;
    })
    console.log(result.join(''))
    return result.join('');
}