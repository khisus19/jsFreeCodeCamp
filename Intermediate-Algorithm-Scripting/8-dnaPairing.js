/* DNA Pairing

Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

/* function pairElement(str) {
    let arr = [];
    let lettersArr = str.split('').map(letter => {
        switch (letter) {
            case 'G':
                arr.push(['G', 'C'])
                break;
            case 'C':
                arr.push(['C', 'G'])
                break;
            case 'A':
                arr.push(['A', 'T'])
                break;
            case 'T':
                arr.push(['T', 'A'])
                break;
        }
    })
    console.log(arr)
    return arr;
} */
  
pairElement("GCG"); //-> [["G", "C"], ["C","G"], ["G", "C"]]
pairElement("ATCGA"); //-> [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

function pairElement(str) {
    let arr = [];
    let lettersArr = str.split('')
    let pairs = lettersArr.map(letter => {
        switch (letter) {
            case 'G':
                return 'C'
            case 'C':
                return 'G'
            case 'A':
                return 'T'
            case 'T':
                return 'A'
        }
    })
    for (let i = 0; i < pairs.length; i++) {
        arr.push([lettersArr[i], pairs[i]])
    }
    console.log(arr)
    return arr;
}

// Another way using objects
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}
