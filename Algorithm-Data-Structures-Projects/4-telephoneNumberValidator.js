/* Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 
*/

//This challenge took me around 10 hours
function telephoneCheck(str) {
    str = str.replace(/\s/g, '');
    if((str[0] === '(' && str[4] === ')') || (str[1] === '(' && str[5] === ')')) {
        str = str.replace(/[()]/g, '');
    } else if (str[0] !== 1 && str.length == 10){
        return /\d{3}-?\d{3}-?\d{4}$/.test(str)
    }
    return /^1?\d{3}-?\d{3}-?\d{4}$/.test(str);
}

console.log("1 555-555-5555", telephoneCheck("1 555-555-5555"), true)
console.log("1 555 555 5555", telephoneCheck("1 555 555 5555"), true)
console.log("1 456 789 4444", telephoneCheck("1 456 789 4444"), true)
console.log("(275)76227382", telephoneCheck("(275)76227382"), false)
console.log("2(757)6227382", telephoneCheck("2(757)6227382"), false)
console.log("(555)555-5555", telephoneCheck("(555)555-5555"), true)
console.log("1 (555) 555-5555", telephoneCheck("1 (555) 555-5555"), true)
console.log("1(555)555-5555", telephoneCheck("1(555)555-5555"), true)
console.log("27576227382", telephoneCheck("27576227382"), false)
console.log("555-555-5555", telephoneCheck("555-555-5555"), true)
console.log("1 (555 555-5555", telephoneCheck("1 (555 555-5555"), false)

// console.log(/1?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}/.test("555-555-5555"))
// console.log("1(5555555555".match(/1?\d{3}-?\d{3}-?\d{4}|1?\([?=\)]\d{3}\)\d{3}-?\d{4}/))
// console.log("27576227382".match(/^\d{3}-?\d{3}-?\d{4}$/))