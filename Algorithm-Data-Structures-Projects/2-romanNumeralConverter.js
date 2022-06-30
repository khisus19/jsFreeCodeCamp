/* Roman Numeral Converter

Convert the given number into a roman numeral. */

function convertToRoman(num) {
    let decimal = num;
    let romanNumber = '';
    while (decimal > 0) {
        if (decimal >= 1000) {
            romanNumber = romanNumber.concat('M')
            decimal -= 1000
        } else if (decimal >= 900) {
            romanNumber = romanNumber.concat('CM')
            decimal -= 900
        } else if (decimal >= 500) {
            romanNumber = romanNumber.concat('D')
            decimal -= 500
        } else if (decimal >= 400) {
            romanNumber = romanNumber.concat('CD')
            decimal -= 400
        } else if (decimal >= 100) {
            romanNumber = romanNumber.concat('C')
            decimal -= 100
        } else if (decimal >= 90) {
            romanNumber = romanNumber.concat('XC')
            decimal -= 90
        }  else if (decimal >= 50) {
            romanNumber = romanNumber.concat('L')
            decimal -= 50
        }  else if (decimal >= 40) {
            romanNumber = romanNumber.concat('XL')
            decimal -= 40
        }  else if (decimal >= 10) {
            romanNumber = romanNumber.concat('X')
            decimal -= 10
        } else if (decimal === 9) {
            romanNumber = romanNumber.concat('IX')
            decimal -= 9
        }  else if (decimal >= 5) {
            romanNumber = romanNumber.concat('V')
            decimal -= 5
        }  else if (decimal === 4) {
            romanNumber = romanNumber.concat('IV')
            decimal -= 4
        } else if (decimal >= 1) {
            romanNumber = romanNumber.concat('I')
            decimal -= 1
        }
    }
    console.log(romanNumber)
    return romanNumber;
}
   
convertToRoman(1000);
convertToRoman(2022);
convertToRoman(3888);

// I couldn't make it work with a switch